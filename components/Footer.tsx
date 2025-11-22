"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          {/* Brand & Socials */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Mohammad Kazim</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer specializing in MERN stack and AI integrations.
              Building scalable web systems and modern digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Kazim71"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-cyan-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammadkazim71/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-cyan-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:mohammadkazim71@gmail.com"
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-cyan-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/_mohammad_kazim/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-cyan-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/917898184847"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-cyan-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm inline-block text-left">
              <li>
                <Link href="#about" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                  About
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                  Education
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>© {currentYear} Mohammad Kazim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

