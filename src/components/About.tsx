"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-brand-light-gray" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/3"
          >
            <div className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-4">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-syne font-bold text-brand-navy mb-6">
              Who I Am
            </h2>
            <div className="w-16 h-1 bg-brand-blue rounded-full"></div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/3 flex flex-col gap-8"
          >
            <div className="text-[17px] text-brand-gray leading-relaxed flex flex-col gap-6">
              <p>
                I&apos;m a Computer Science undergraduate specialising in AI and Machine Learning at St. Peter&apos;s Engineering College, JNTUH, Hyderabad — maintaining a CGPA of 9.6. I build full-stack web applications and AI-powered backend systems using Python, FastAPI, React, and PostgreSQL.
              </p>
              <p>
                I&apos;ve completed two industry internships — including a role at Infosys Springboard where I built a real-world NLP solution, and a Tech Lead position at Swecha&apos;s Vishwam.AI initiative. I believe in writing clean code, solving real problems, and building products that actually work.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8 mt-4 pt-8 border-t border-brand-border">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎓</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">Degree</span>
                  <span className="font-medium text-brand-navy text-sm">B.Tech CS (AI & ML)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🏛️</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">University</span>
                  <span className="font-medium text-brand-navy text-sm">JNTUH, Hyderabad</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📅</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">Batch</span>
                  <span className="font-medium text-brand-navy text-sm">2023 – 2027</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">Location</span>
                  <span className="font-medium text-brand-navy text-sm">Hyderabad, India</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">Email</span>
                  <span className="font-medium text-brand-navy text-sm">vinaybethala9@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">💼</span>
                <div className="flex flex-col">
                  <span className="text-xs text-brand-gray">Available</span>
                  <span className="font-medium text-brand-navy text-sm">Immediately</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
