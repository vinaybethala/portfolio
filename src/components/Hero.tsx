"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="home">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8 xl:pl-16"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-success-bg border border-brand-success-border mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-success animate-[pulse-dot_2s_ease-in-out_infinite]" />
              <span className="text-sm font-medium text-brand-success">Available for Opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="flex flex-col gap-2 mb-4">
              <span className="text-[20px] text-brand-gray font-medium">Hi, I&apos;m</span>
              <span className="text-[44px] md:text-[56px] font-syne font-extrabold text-brand-navy leading-tight">
                Vinay Bethala
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="h-8 mb-6">
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  3000,
                  "AI & ML Developer",
                  3000,
                  "Backend Developer",
                  3000,
                  "Full-Stack Builder",
                  3000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[22px] font-semibold text-brand-blue"
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="text-[15px] text-brand-gray mb-10 max-w-lg">
              B.Tech CS (AI & ML) · CGPA 9.6 · JNTUH Hyderabad · 2027 Batch
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/Bethala_Vinay_Resume.pdf"
                download
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-brand-navy text-white font-medium hover:bg-brand-blue transition-colors duration-300"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-transparent text-brand-navy border-2 border-brand-navy font-medium hover:bg-brand-navy hover:text-white transition-colors duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/vinaybethala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-blue hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vinay-bethala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-blue hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:vinaybethala9@gmail.com"
                className="text-brand-gray hover:text-brand-blue hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8 xl:pr-16"
          >
            <div className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px]">
              {/* Background Blob */}
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  background: "linear-gradient(135deg, #E8F4FF 0%, #F0F4FF 50%, #F8F0FF 100%)",
                }}
                animate={{
                  borderRadius: [
                    "40% 60% 60% 40% / 60% 30% 70% 40%",
                    "60% 40% 30% 70% / 40% 50% 60% 50%",
                    "40% 60% 60% 40% / 60% 30% 70% 40%",
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* 3D Tilt Image Container */}
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1200}
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#00BFFF"
                scale={1.02}
                className="absolute inset-0 z-10 w-full h-full flex items-end justify-center"
              >
                <Image
                  src="/avatar-3d.png"
                  alt="Vinay Bethala"
                  width={360}
                  height={460}
                  className="object-contain object-bottom w-[260px] h-[340px] md:w-[360px] md:h-[460px]"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
                    mixBlendMode: "multiply",
                  }}
                  priority
                />

                {/* Floating Badge 1 (Hackathon) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white border border-brand-border rounded-xl px-3 py-2 md:px-4 md:py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)] z-20"
                >
                  <span className="text-[10px] md:text-xs font-semibold text-brand-navy whitespace-nowrap">
                    🏆 National Hackathon Winner
                  </span>
                </motion.div>

                {/* Floating Badge 2 (CGPA) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-10 -right-4 md:top-20 md:-right-8 bg-white border border-brand-border rounded-xl px-3 py-2 md:px-4 md:py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)] z-20"
                >
                  <span className="text-[10px] md:text-xs font-semibold text-brand-navy whitespace-nowrap">
                    ⭐ CGPA 9.6 / 10.0
                  </span>
                </motion.div>
              </Tilt>
            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-24 pt-10 border-t border-brand-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-brand-border text-center">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-brand-blue">2+</span>
              <span className="text-sm text-brand-gray">Internships</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-brand-blue">3+</span>
              <span className="text-sm text-brand-gray">Projects</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-brand-blue">9.6</span>
              <span className="text-sm text-brand-gray">CGPA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-bold text-brand-blue">2</span>
              <span className="text-sm text-brand-gray">Hackathon Prizes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
