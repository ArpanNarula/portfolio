"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function usePremiumScroll(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let active = true;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active || !rootRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });
      const tiltCleanups: Array<() => void> = [];

      const ctx = gsap.context(() => {
        const q = gsap.utils.selector(rootRef);

        const nav = q("[data-nav]")[0] as HTMLElement | undefined;
        const heroSection = q("[data-hero-section]")[0] as HTMLElement | undefined;
        const heroCopy = q("[data-hero-copy]")[0] as HTMLElement | undefined;
        const heroPanel = q("[data-hero-panel]")[0] as HTMLElement | undefined;
        const revealTargets = gsap.utils.toArray<HTMLElement>(q("[data-reveal]"));
        const parallaxLayers = gsap.utils.toArray<HTMLElement>(q("[data-parallax]"));
        const previewPanels = gsap.utils.toArray<HTMLElement>(q("[data-project-preview]"));
        const showcase = q("[data-showcase]")[0] as HTMLElement | undefined;
        const showcasePin = q("[data-showcase-pin]")[0] as HTMLElement | undefined;
        const showcaseCards = gsap.utils.toArray<HTMLElement>(q("[data-showcase-card]"));

        if (nav) {
          ScrollTrigger.create({
            start: 24,
            end: "max",
            onUpdate: (self) => {
              nav.classList.toggle("nav-scrolled", self.scroll() > 28);
            },
          });
        }

        if (heroCopy) {
          const heroItems = Array.from(heroCopy.children) as HTMLElement[];

          gsap.set(heroItems, {
            autoAlpha: 0,
            y: 36,
            willChange: "transform, opacity",
          });

          gsap.to(heroItems, {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.1,
            delay: 0.12,
            ease: "power3.out",
            clearProps: "willChange",
          });
        }

        if (heroPanel) {
          gsap.fromTo(
            heroPanel,
            {
              autoAlpha: 0,
              y: 48,
              scale: 0.96,
              rotateX: 6,
              willChange: "transform, opacity",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              duration: 1.1,
              delay: 0.2,
              ease: "power3.out",
              clearProps: "willChange",
            },
          );
        }

        revealTargets.forEach((target) => {
          const delay = Number(target.dataset.delay ?? "0");

          gsap.fromTo(
            target,
            {
              autoAlpha: 0,
              y: 44,
              willChange: "transform, opacity",
            },
            {
              autoAlpha: 1,
              y: 0,
              delay,
              duration: 0.9,
              ease: "power3.out",
              clearProps: "willChange",
              scrollTrigger: {
                trigger: target,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

        if (heroSection) {
          parallaxLayers.forEach((layer) => {
            const depth = Number(layer.dataset.parallax ?? "10");

            gsap.to(layer, {
              yPercent: depth,
              scale: 1 + depth * 0.0025,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          });

          if (heroCopy) {
            gsap.to(heroCopy, {
              yPercent: 10,
              opacity: 0.9,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }

          if (heroPanel) {
            gsap.to(heroPanel, {
              yPercent: -7,
              scale: 1.04,
              ease: "none",
              scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 0.8,
              },
            });
          }
        }

        previewPanels.forEach((panel) => {
          gsap.fromTo(
            panel,
            {
              scale: 1.08,
              autoAlpha: 0.6,
              willChange: "transform, opacity",
            },
            {
              scale: 1,
              autoAlpha: 1,
              ease: "none",
              clearProps: "willChange",
              scrollTrigger: {
                trigger: panel,
                start: "top bottom-=8%",
                end: "bottom center",
                scrub: 0.85,
              },
            },
          );
        });

        const tiltTargets = gsap.utils.toArray<HTMLElement>(q("[data-tilt-card]"));

        if (window.matchMedia("(pointer: fine)").matches) {
          tiltTargets.forEach((target) => {
            const glow = target.querySelector("[data-card-glow]") as HTMLElement | null;
            const rotateXTo = gsap.quickTo(target, "rotationX", {
              duration: 0.35,
              ease: "power3.out",
            });
            const rotateYTo = gsap.quickTo(target, "rotationY", {
              duration: 0.35,
              ease: "power3.out",
            });
            const yTo = gsap.quickTo(target, "y", {
              duration: 0.35,
              ease: "power3.out",
            });
            const glowOpacityTo = glow
              ? gsap.quickTo(glow, "opacity", {
                  duration: 0.3,
                  ease: "power2.out",
                })
              : null;

            const handleMove = (event: PointerEvent) => {
              const bounds = target.getBoundingClientRect();
              const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
              const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

              rotateXTo(offsetY * -8);
              rotateYTo(offsetX * 10);
              yTo(-6);
              glowOpacityTo?.(1);
            };

            const handleLeave = () => {
              rotateXTo(0);
              rotateYTo(0);
              yTo(0);
              glowOpacityTo?.(0);
            };

            target.addEventListener("pointermove", handleMove);
            target.addEventListener("pointerleave", handleLeave);

            gsap.set(target, {
              transformPerspective: 1400,
              transformStyle: "preserve-3d",
            });

            if (glow) {
              gsap.set(glow, { opacity: 0 });
            }

            ScrollTrigger.addEventListener("refreshInit", handleLeave);

            tiltCleanups.push(() => {
              ScrollTrigger.removeEventListener("refreshInit", handleLeave);
              target.removeEventListener("pointermove", handleMove);
              target.removeEventListener("pointerleave", handleLeave);
            });
          });
        }

        ScrollTrigger.matchMedia({
          "(min-width: 1024px)": () => {
            if (!showcase || !showcasePin || showcaseCards.length === 0) {
              return undefined;
            }

            showcaseCards.forEach((card, index) => {
              gsap.set(card, {
                zIndex: showcaseCards.length - index,
                autoAlpha: index === 0 ? 1 : 0,
                y: index === 0 ? 0 : 52,
                scale: index === 0 ? 1 : 0.96,
              });
            });

            const timeline = gsap.timeline({
              defaults: {
                duration: 1,
                ease: "power2.inOut",
              },
            });

            showcaseCards.slice(1).forEach((card, index) => {
              const previous = showcaseCards[index];

              timeline
                .to(
                  previous,
                  {
                    autoAlpha: 0,
                    y: -40,
                    scale: 0.94,
                  },
                  index,
                )
                .to(
                  card,
                  {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                  },
                  index,
                );
            });

            const trigger = ScrollTrigger.create({
              trigger: showcase,
              start: "top top+=110",
              end: `+=${showcaseCards.length * 320}`,
              scrub: 0.9,
              pin: showcasePin,
              animation: timeline,
              anticipatePin: 1,
            });

            return () => {
              trigger.kill();
              timeline.kill();
            };
          },
        });
      }, rootRef);

      cleanup = () => {
        tiltCleanups.forEach((callback) => callback());
        ctx.revert();
      };
    })();

    return () => {
      active = false;
      cleanup?.();
    };
  }, [rootRef]);
}
