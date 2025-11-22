"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon?: React.ReactNode;
  level?: number;
  category?: string;
}

export default function SkillCard({ name, icon, level, category }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-2xl p-3 border border-gray-200/50 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center gap-3 aspect-square group"
    >
      {icon && (
        <div className="p-2 rounded-2xl bg-gray-50 dark:bg-gray-800/50 group-hover:bg-white dark:group-hover:bg-gray-800 transition-colors duration-300 shadow-sm">
          {icon}
        </div>
      )}
      <h3 className="font-bold text-base text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
        {name}
      </h3>
    </motion.div>
  );
}

