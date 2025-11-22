"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="glass rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl group-hover:bg-violet-500/20 transition-colors" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
              {title}
            </h3>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-cyan-900/30 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shrink-0"
                title="View Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-1 line-clamp-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
               <span className="px-3 py-1 text-[10px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">
                 +{techStack.length - 4}
               </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
