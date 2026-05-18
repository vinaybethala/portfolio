"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CERTIFICATIONS = [
  {
    id: 1,
    icon: "🟢",
    title: "ServiceNow ITSM Fundamentals",
    by: "ServiceNow — Now Learning",
    date: "April 2026",
  },
  {
    id: 2,
    icon: "🔵",
    title: "Python Foundation",
    by: "Infosys Springboard",
    date: "2026",
  },
  {
    id: 3,
    icon: "🔵",
    title: "Software Engineering & Agile Dev",
    by: "Infosys Springboard",
    date: "2026",
  },
  {
    id: 4,
    icon: "🟠",
    title: "The Joy of Computing Using Python",
    by: "NPTEL — Indian Institute of Technology",
    date: "2025",
  },
];

const ACHIEVEMENTS = [
  {
    id: 1,
    icon: "🏆",
    title: "2nd Prize — National Level Hackathon",
    desc: "EduEarn Platform · Competed against university teams across India",
  },
  {
    id: 2,
    icon: "🥈",
    title: "2nd Prize — Tech Triathlon",
    desc: "Osmania University Engineering College",
  },
  {
    id: 3,
    icon: "🥉",
    title: "3rd Prize — Paper Presentation",
    desc: "Malla Reddy Engineering College",
  },
  {
    id: 4,
    icon: "👨‍💻",
    title: "Appointed Tech Lead",
    desc: "Swecha Vishwam.AI — Selected to lead engineering team",
  },
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-brand-light-gray" id="certifications">
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
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-brand-blue rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-syne font-bold text-brand-navy mb-2 px-2">Certifications</h3>
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="bg-white rounded-xl border-l-4 border-l-brand-blue p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:border-l-brand-navy hover:translate-x-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">{cert.icon}</div>
                  <div>
                    <h4 className="text-[17px] font-bold text-brand-navy mb-1 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-brand-gray mb-1">
                      {cert.by}
                    </p>
                    <p className="text-xs text-brand-blue font-semibold">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-syne font-bold text-brand-navy mb-2 px-2">Achievements</h3>
            {ACHIEVEMENTS.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="bg-white rounded-xl border-l-4 border-l-brand-blue p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:border-l-brand-navy hover:translate-x-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl mt-1">{achievement.icon}</div>
                  <div>
                    <h4 className="text-[17px] font-bold text-brand-navy mb-1.5 leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {achievement.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
