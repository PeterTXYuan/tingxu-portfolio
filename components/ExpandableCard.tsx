'use client';

import { motion, AnimatePresence } from "framer-motion";
import { useState, JSX } from "react";

interface ExpandableCardProps {
  title: string;
  subtitle?: string;
  description: string;
  details?: string | JSX.Element;
  links?: { label: string; url: string }[];
  images?: string[]; 
  expanded: boolean;
  onClick: () => void;
  icon?: string; // Emoji or icon
  colorScheme?: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'indigo';
}

const colorSchemes = {
  blue: {
    gradient: 'from-blue-50 to-cyan-50',
    border: 'border-blue-200/50',
    title: 'text-blue-900',
    subtitle: 'text-blue-700/80',
    accent: 'text-blue-600',
    blob: 'bg-blue-300/20 group-hover:bg-blue-300/30',
    iconBorder: 'border-blue-200/50',
    linkBorder: 'border-blue-300/50',
    linkText: 'text-blue-700 hover:text-blue-800',
  },
  purple: {
    gradient: 'from-purple-50 to-pink-50',
    border: 'border-purple-200/50',
    title: 'text-purple-900',
    subtitle: 'text-purple-700/80',
    accent: 'text-purple-600',
    blob: 'bg-purple-300/20 group-hover:bg-purple-300/30',
    iconBorder: 'border-purple-200/50',
    linkBorder: 'border-purple-300/50',
    linkText: 'text-purple-700 hover:text-purple-800',
  },
  green: {
    gradient: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200/50',
    title: 'text-emerald-900',
    subtitle: 'text-emerald-700/80',
    accent: 'text-emerald-600',
    blob: 'bg-emerald-300/20 group-hover:bg-emerald-300/30',
    iconBorder: 'border-emerald-200/50',
    linkBorder: 'border-emerald-300/50',
    linkText: 'text-emerald-700 hover:text-emerald-800',
  },
  orange: {
    gradient: 'from-orange-50 to-amber-50',
    border: 'border-orange-200/50',
    title: 'text-orange-900',
    subtitle: 'text-orange-700/80',
    accent: 'text-orange-600',
    blob: 'bg-orange-300/20 group-hover:bg-orange-300/30',
    iconBorder: 'border-orange-200/50',
    linkBorder: 'border-orange-300/50',
    linkText: 'text-orange-700 hover:text-orange-800',
  },
  pink: {
    gradient: 'from-pink-50 to-rose-50',
    border: 'border-pink-200/50',
    title: 'text-pink-900',
    subtitle: 'text-pink-700/80',
    accent: 'text-pink-600',
    blob: 'bg-pink-300/20 group-hover:bg-pink-300/30',
    iconBorder: 'border-pink-200/50',
    linkBorder: 'border-pink-300/50',
    linkText: 'text-pink-700 hover:text-pink-800',
  },
  indigo: {
    gradient: 'from-indigo-50 to-violet-50',
    border: 'border-indigo-200/50',
    title: 'text-indigo-900',
    subtitle: 'text-indigo-700/80',
    accent: 'text-indigo-600',
    blob: 'bg-indigo-300/20 group-hover:bg-indigo-300/30',
    iconBorder: 'border-indigo-200/50',
    linkBorder: 'border-indigo-300/50',
    linkText: 'text-indigo-700 hover:text-indigo-800',
  },
};

export default function ExpandableCard({ 
  title, 
  subtitle, 
  description, 
  details, 
  links, 
  images, 
  expanded, 
  onClick,
  icon = "📋",
  colorScheme = 'blue'
}: ExpandableCardProps) {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null);
  const colors = colorSchemes[colorScheme];

  return (
    <>
      <motion.div
        layout
        onClick={onClick}
        className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer 
          ${expanded ? "md:col-span-2" : ""} relative overflow-hidden group`}
      >
        {/* Decorative gradient blob */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 ${colors.blob} rounded-full blur-3xl transition-colors`} />
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-3">
            <div className={`text-4xl flex-shrink-0 bg-white/80 rounded-xl p-2 shadow-sm border ${colors.iconBorder}`}>
              {icon}
            </div>
            <div className="flex-1">
              <motion.h3 layout className={`text-2xl font-bold mb-1 ${colors.title}`}>{title}</motion.h3>
              {subtitle && <motion.p layout className={`text-sm font-medium ${colors.subtitle} mb-2`}>{subtitle}</motion.p>}
            </div>
          </div>
          <motion.p layout className="text-gray-700 font-medium">{description}</motion.p>

        {!expanded && (
          <div className={`mt-4 flex items-center gap-2 text-xs font-medium ${colors.accent}`}>
            <span>Click to expand</span>
            <span className="text-lg">↓</span>
          </div>
        )}

        <AnimatePresence>
          {expanded && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {details && <div className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line bg-white/60 rounded-xl p-4 border border-white/80">{details}</div>}

              {images && images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className="relative group/image overflow-hidden rounded-xl border-2 border-white/80 shadow-md hover:shadow-xl transition-all cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        setOpenImageIndex(index);
                      }}
                    >
                      <img
                        src={src}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover group-hover/image:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors" />
                    </div>
                  ))}
                </div>
              )}

              {links && links.length > 0 && (
                <div className="flex gap-3 flex-wrap mt-4">
                  {links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white border-2 ${colors.linkBorder} rounded-lg text-sm font-semibold ${colors.linkText} shadow-sm hover:shadow-md transition-all`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.label}
                      <span className="text-base">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.div>

      {openImageIndex !== null && images && images.length > 0 && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setOpenImageIndex(null)}>
          <div className="relative max-w-5xl max-h-[90vh] p-4">
            <img 
              src={images[openImageIndex]} 
              alt="Preview" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
            />
            <button 
              className="absolute top-4 right-4 bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-lg font-medium transition-colors"
              onClick={() => setOpenImageIndex(null)}
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
