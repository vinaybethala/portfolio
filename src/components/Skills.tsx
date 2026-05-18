"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaDesktop, FaServer, FaMicrochip, FaTools, FaCloud } from "react-icons/fa";

const SKILL_CATEGORIES = [
  {
    id: 1,
    title: "Languages",
    icon: <FaCode className="w-6 h-6" />,
    skills: ["Python", "Java", "JavaScript", "C", "SQL"],
  },
  {
    id: 2,
    title: "Frontend",
    icon: <FaDesktop className="w-6 h-6" />,
    skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Backend & APIs",
    icon: <FaServer className="w-6 h-6" />,
    skills: ["FastAPI", "REST APIs", "JWT Auth", "PostgreSQL", "Database Design"],
  },
  {
    id: 4,
    title: "AI / ML",
    icon: <FaMicrochip className="w-6 h-6" />,
    skills: ["NLP", "Scikit-learn", "Pandas", "NumPy", "NLTK", "GenAI APIs", "LLMs"],
  },
  {
    id: 5,
    title: "Tools",
    icon: <FaTools className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Agile / Scrum"],
  },
  {
    id: 6,
    title: "Platforms",
    icon: <FaCloud className="w-6 h-6" />,
    skills: ["ServiceNow ITSM", "AWS Basics", "Vercel", "Linux"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white" id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-brand-navy mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-brand-blue rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white border border-brand-border rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:border-brand-blue hover:shadow-[0_4px_24px_rgba(0,191,255,0.15)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-navy">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#F0F9FF] text-[#0369A1] border border-[#bae6fd] rounded-full px-3 py-1 text-[13px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
