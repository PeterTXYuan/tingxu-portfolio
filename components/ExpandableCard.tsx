'use client';

import { motion, AnimatePresence } from "framer-motion";

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  description: string;
  details?: string;
  links?: { label: string; url: string }[];
  expanded: boolean;
  onClick: () => void;
}

export default function ExpandableCard({ title, subtitle, description, details, links, expanded, onClick }: ExpandableCardProps) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer 
        ${expanded ? "md:col-span-2" : ""} relative`}
    >
      <motion.h3 layout className="text-xl font-bold mb-1">{title}</motion.h3>
      {subtitle && <motion.p layout className="text-sm text-gray-500 mb-2">{subtitle}</motion.p>}
      <motion.p layout className="text-gray-700">{description}</motion.p>

      {!expanded && (
        <p className="text-xs text-gray-400 mt-2 italic">Click to expand</p>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            {details && <p className="text-gray-600 mb-3">{details}</p>}
            {links && links.length > 0 && (
              <div className="flex gap-3 flex-wrap">
                {links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
