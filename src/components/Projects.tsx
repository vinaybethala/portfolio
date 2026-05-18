"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const PROJECTS = [
  {
    id: 1,
    title: "MentorLog",
    subtitle: "GenAI-Powered Academic Operations Platform",
    badge: "Full Stack · AI",
    stack: ["Python", "FastAPI", "PostgreSQL", "GenAI APIs", "REST APIs"],
    desc: "Full-stack academic management system for coaching institutes. Real-time session tracking, attendance analytics, and GenAI-generated performance summaries.",
    github: "https://github.com/vinaybethala/mentorlog",
    image: "/project-mentorlog.png",
    imageSide: "left",
  },
  {
    id: 2,
    title: "EduEarn",
    subtitle: "Learn-to-Earn Education Platform",
    badge: "🏆 National Hackathon 2nd Prize",
    stack: ["React", "JavaScript", "SQL", "REST APIs", "Git"],
    desc: "Gamified full-stack platform combining structured learning with skill-based earning. Won 2nd Prize at National Level Hackathon.",
    github: "https://github.com/vinaybethala/eduearn-learning-platform",
    image: "/project-eduearn.png",
    imageSide: "right",
  },
  {
    id: 3,
    title: "Fake News Detector",
    subtitle: "AI-Powered News Verification Tool",
    badge: "AI · NLP · ML",
    stack: ["Python", "NLP", "Scikit-learn", "NLTK", "Pandas"],
    desc: "NLP pipeline that detects and verifies fake news. Designed full ML pipeline — data ingestion, preprocessing, feature extraction, training, and evaluation. Built during Infosys Springboard internship.",
    github: "https://github.com/vinaybethala/fakenews_detection_and_verification_tool",
    image: "/project-fakenews.png",
    imageSide: "left",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-brand-light-gray" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-brand-navy mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-brand-blue rounded-full mx-auto"></div>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isLeft = project.imageSide === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white border border-brand-border rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-400 group overflow-hidden`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-1/2 relative overflow-hidden bg-brand-light-gray p-4 lg:p-6">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-brand-border shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
          <div className="absolute top-4 left-4 bg-brand-navy text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md z-10">
            {project.badge}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <h3 className="text-3xl font-syne font-bold text-brand-navy mb-2">
          {project.title}
        </h3>
        <p className="text-brand-blue font-medium mb-6">
          {project.subtitle}
        </p>
        
        <p className="text-brand-gray leading-relaxed mb-8">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="text-xs font-semibold text-brand-gray bg-brand-light-gray px-3 py-1 rounded-md border border-brand-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors duration-300 group/btn w-fit"
          >
            <FaGithub className="w-5 h-5" />
            <span>View on GitHub</span>
            <HiArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
