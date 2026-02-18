"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Python",
    "DSA",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative scroll-smooth min-h-screen bg-black text-white px-6 py-16">
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-40 top-10 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl" />
        <div className="absolute right-[-200px] bottom-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 opacity-10 blur-3xl" />
      </div>

     {/* NAVBAR */}
<motion.nav
  initial={{ y: -30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="fixed top-6 left-0 right-0 mx-auto max-w-6xl px-6 flex items-center justify-between z-20 backdrop-blur-lg"
>
  {/* Logo */}
  <div className="text-white font-semibold text-lg">
    arpan.dev
  </div>

  {/* Desktop Links */}
  <div className="hidden md:flex gap-6 text-gray-300 font-medium">
    {["projects", "skills", "experience", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className="hover:text-white hover:underline underline-offset-8 transition"
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </a>
    ))}
  </div>

  {/* Right Side */}
<div className="flex items-center gap-3">

  {/* Desktop Buttons */}
  <div className="hidden sm:flex gap-3">
    <a
      href="https://github.com/ArpanNarula"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-lg bg-white text-black font-medium"
    >
      GitHub
    </a>

    <a
      href="https://linkedin.com/in/arpan-narula-4a4793253"
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 rounded-lg border border-white"
    >
      LinkedIn
    </a>

    <a
      href="/resume.pdf"
      download
      className="px-4 py-2 rounded-lg bg-blue-600 text-white"
    >
      Resume
    </a>
  </div>

  {/* Mobile Resume Button */}
  <a
    href="/resume.pdf"
    download
    className="sm:hidden px-4 py-2 rounded-lg bg-blue-600 text-white"
  >
    Resume
  </a>

  {/* Mobile Hamburger */}
  <button
    className="sm:hidden text-white"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={28} /> : <Menu size={28} />}
  </button>

</div>

 
</motion.nav>

{/* Mobile Dropdown Menu */}
{open && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="fixed top-24 left-0 right-0 mx-auto w-[90%] bg-gray-900 rounded-2xl p-6 z-30 sm:hidden shadow-xl"
  >
    <div className="flex flex-col gap-4 text-gray-200 font-medium">
      {["projects", "skills", "experience", "contact"].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setOpen(false)}
          className="hover:text-white transition"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}

      <hr className="border-gray-700" />

      <a
        href="https://github.com/ArpanNarula"
        target="_blank" rel="noreferrer"
        onClick={() => setOpen(false)}
        className="text-blue-400"
      >
        GitHub →
      </a>

      <a
        href="https://linkedin.com/in/arpan-narula-4a4793253"
        target="_blank" rel="noreferrer"
        onClick={() => setOpen(false)}
        className="text-blue-400"
      >
        LinkedIn →
      </a>

      <a
        href="/resume.pdf"
        download
        onClick={() => setOpen(false)}
        className="text-blue-400"
      >
        Resume ↓
      </a>
    </div>
  </motion.div>
)}

      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center pt-28 pb-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm Arpan Narula 👋
        </h1>

        <p className="text-gray-400 text-lg mt-4">
          Full Stack Developer | NSUT | SIH Semi-Finalist
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://github.com/ArpanNarula"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arpan-narula-4a4793253"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 rounded-xl border border-white hover:scale-105 transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-12 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me ✨</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a B.Tech CSE (IoT) student at NSUT passionate about building
          full-stack applications, AI-powered dashboards, and impactful products.
          I work on real-world projects like JudicialEase and UnstockAI using
          modern web development and GenAI.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Projects 🚀
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* JudicialEase */}
          <motion.article
            whileHover={{ scale: 1.04 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold">JudicialEase</h3>
            <p className="text-gray-400 mt-2">
              AI-driven legal research platform — SIH Semi-Finalist.
            </p>
            <a
              href="https://sih-fronend.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 mt-4 inline-block"
            >
              Live Demo →
            </a>
          </motion.article>

          {/* UnstockAI */}
          <motion.article
            whileHover={{ scale: 1.04 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold">UnstockAI</h3>
            <p className="text-gray-400 mt-2">
              GenAI inventory assistant with forecasting + dashboards.
            </p>
            <a
              href="https://github.com/ArpanNarula/genai_project"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 mt-4 inline-block"
            >
              GitHub →
            </a>
          </motion.article>

          {/* IMDB */}
          <motion.article
            whileHover={{ scale: 1.04 }}
            className="p-6 bg-gray-900 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold">IMDB Sentiment Analysis</h3>
            <p className="text-gray-400 mt-2">
              NLP pipeline with TensorFlow (92% accuracy), deployed on Hugging Face.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://huggingface.co/spaces/Ravi1227/movie-sentiment-analysis"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                Live →
              </a>

              <a
                href="https://github.com/ravi1215/IMDBMovie-review-sentiment-analysis"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                GitHub →
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Skills ⚡</h2>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.15 }}
              className="px-4 py-2 bg-gray-800 rounded-xl text-gray-200 cursor-pointer"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Experience 💼</h2>

        <div className="max-w-3xl mx-auto text-left bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-lg font-bold">
            Web Developer Intern — Innate Infotech
          </h3>
          <p className="text-gray-400 mt-2">
            Built frontend + backend features (PHP, MySQL), improved UI/UX and delivered fixes.
          </p>
          <p className="text-gray-500 mt-2 text-sm">May 2025 — July 2025</p>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Achievements 🏆</h2>
        <ul className="max-w-3xl mx-auto text-gray-400 space-y-2">
          <li>🥇 1st — Stock Showdown (Convoke 7.0)</li>
          <li>🚀 SIH Semi-Finalist — JudicialEase</li>
          <li>🎖️ TOYCATHON 2021 Finalist — Top 200 teams</li>
        </ul>
      </section>

      {/* CONTACT */}
<section
  id="contact"
  className="mt-24 text-center pb-32 max-w-3xl mx-auto"
>
  <h2 className="text-3xl font-semibold mb-4">
    Contact 📩
  </h2>

  <p className="text-gray-400 mb-10">
    Feel free to reach out for opportunities, collaborations, or just a quick chat.
  </p>

  {/* Formspree Contact Form */}
  <form
    action="https://formspree.io/f/mojnlnej"
    method="POST"
    className="flex flex-col gap-5 bg-gray-900 p-8 rounded-2xl shadow-lg"
  >
    {/* Name */}
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Email */}
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Message */}
    <textarea
      name="message"
      placeholder="Your Message"
      required
      rows={5}
      className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:brightness-110 transition"
    >
      Send Message 🚀
    </button>
  </form>

  {/* Email fallback */}
  <p className="text-gray-500 mt-8 text-sm">
    Or email me directly at{" "}
    <span className="text-gray-300">
      arpannarula9999@gmail.com
    </span>
  </p>
</section>

    </main>
  );
}
