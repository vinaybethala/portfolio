"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EXPERIENCES = [
  {
    id: 1,
    role: "AI Virtual Intern",
    company: "Infosys Springboard",
    period: "January 2026 – March 2026",
    type: "Internship · Remote",
    bullets: [
      "Built Fake News Detection Tool using Python and NLP — full ML pipeline from data ingestion to model evaluation.",
      "Followed Agile methodology — sprint planning, iterative delivery, peer reviews.",
      "Delivered statistical accuracy reports using Pandas and Scikit-learn.",
    ],
    skills: ["Python", "NLP", "Agile", "Scikit-learn", "Pandas"],
  },
  {
    id: 2,
    role: "Tech Lead Intern",
    company: "Swecha — Vishwam.AI Initiative",
    period: "May 2025 – July 2025",
    type: "Internship · Hyderabad",
    bullets: [
      "Led engineering team to design and ship AI-based software solutions.",
      "Managed Git workflows, sprint planning, and milestone delivery.",
      "Produced technical documentation and stakeholder progress dashboards.",
    ],
    skills: ["Python", "Git", "Agile", "Team Leadership", "AI"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white" id="experience">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-brand-navy mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-brand-blue rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-brand-border ml-3 md:ml-6 space-y-12 pb-4">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-7px] top-8 w-3 h-3 bg-brand-blue rounded-full border-[3px] border-white box-content shadow-[0_0_0_2px_var(--color-brand-blue)]"></div>

      {/* Entry Card */}
      <div className="bg-white border border-brand-border rounded-[16px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-1">
              {exp.role}
            </h3>
            <div className="text-lg font-semibold text-brand-blue mb-2">
              {exp.company}
            </div>
            <div className="text-sm font-medium text-brand-gray">
              {exp.type}
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-1.5 bg-[#F0F9FF] text-[#0369A1] text-sm font-medium rounded-full">
              {exp.period}
            </span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {exp.bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex items-start text-brand-gray leading-relaxed">
              <span className="mr-3 text-brand-blue mt-1.5 text-[10px]">●</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border/50">
          {exp.skills.map((skill: string) => (
            <span
              key={skill}
              className="text-xs font-semibold text-brand-gray bg-brand-light-gray px-3 py-1 rounded-md border border-brand-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
