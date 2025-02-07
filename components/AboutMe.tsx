"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "@/components/ui/TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>HTML & CSS</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript (Basic)</li>
        <li>React.js & Next.js</li>
        <li>Redux Toolkit</li>
        <li>GSAP Animations</li>
        <li>Tailwind CSS</li>
        <li>C++</li>
        <li>Adobe Illustrator (Basic)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Bachelor's in Computer Science (2024) - Ongoing</li>
        <li>Fsc Pre Engineering - Punjab College of Information & Technology</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Master in JavaScript - Meta</li>
        <li>Certified in WordPress</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [, startTransition] = useTransition(); // Removed unused `isPending`

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      id="about"
      className="text-white bg-black-100 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:grid md:grid-cols-2 gap-12 items-center">
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/exp1.svg"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-6 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-5xl font-extrabold text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate frontend developer skilled in crafting elegant,
            interactive, and high-performance web applications. With expertise
            in JavaScript, TypeScript, React, and Next.js, I love building
            modern UI experiences with smooth animations using GSAP. Currently,
            I am expanding my backend knowledge with Node.js, Express, and
            MySQL.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content with green background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-8 p-6 border border-white rounded-lg shadow-md"
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>

          {/* Download CV Button */}
          <motion.a
            href="/M_Nouman_Afzal_CV.pdf"
            download
            className="mt-6 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 active:scale-95 text-center self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
