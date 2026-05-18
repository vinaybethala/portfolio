"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const CONTACT_METHODS = [
  {
    id: 1,
    icon: <FaEnvelope className="w-8 h-8" />,
    label: "Email",
    value: "vinaybethala9@gmail.com",
    link: "mailto:vinaybethala9@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin className="w-8 h-8" />,
    label: "LinkedIn",
    value: "linkedin.com/in/vinay-bethala",
    link: "https://www.linkedin.com/in/vinay-bethala/",
  },
  {
    id: 3,
    icon: <FaGithub className="w-8 h-8" />,
    label: "GitHub",
    value: "github.com/vinaybethala",
    link: "https://github.com/vinaybethala",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-brand-navy" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Headings */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] md:text-[42px] font-syne font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether it&apos;s a project, internship, freelance work, or just a conversation — I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {CONTACT_METHODS.map((method) => (
            <motion.a
              key={method.id}
              href={method.link}
              target={method.label !== "Email" ? "_blank" : undefined}
              rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-7 rounded-2xl bg-white/5 border border-white/15 hover:bg-brand-blue/15 hover:border-brand-blue transition-all duration-300 group"
            >
              <div className="text-white/80 group-hover:text-brand-blue group-hover:-translate-y-1 transition-all duration-300 mb-5">
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {method.label}
              </h3>
              <p className="text-white/60 text-sm font-medium">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="/Bethala_Vinay_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-9 py-4 rounded-xl bg-brand-blue text-brand-navy font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <HiDownload className="w-6 h-6" />
            <span>Download My Resume</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
