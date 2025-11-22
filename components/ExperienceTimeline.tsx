"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  points?: string[];
  image?: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-blue-500 hidden md:block" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative md:pl-24"
          >
            {/* Timeline dot */}
            <div className="absolute left-8 top-2 w-4 h-4 bg-violet-600 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-[#0d0d0d] z-10 hidden md:block" />

            {/* Content Card */}
            <div className="glass rounded-xl p-6 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-violet-600 dark:text-cyan-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0 shrink-0">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                  {exp.location && (
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  )}
                </div>
              </div>

              {exp.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {exp.points && exp.points.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-violet-600 dark:text-cyan-400 mr-2 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

