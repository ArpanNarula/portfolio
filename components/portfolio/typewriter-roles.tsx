"use client";

import { useEffect, useState } from "react";

type TypewriterRolesProps = {
  roles: string[];
};

export function TypewriterRoles({ roles }: TypewriterRolesProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const shouldPause =
      !isDeleting && displayText === currentRole ? 1250 : 0;
    const shouldAdvance =
      isDeleting && displayText.length === 0 ? 300 : 0;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, displayText.length - 1)
        : currentRole.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, shouldPause || shouldAdvance || (isDeleting ? 46 : 82));

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <span className="inline-flex min-h-[1.5em] items-center gap-2">
      <span>{displayText}</span>
      <span className="h-6 w-px animate-caret rounded-full bg-amber-200/90" />
    </span>
  );
}
