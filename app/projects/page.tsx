"use client";

import { useState } from "react";
import ExpandableCard from "@/components/ExpandableCard";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "GAN Research",
      subtitle: "Jun 2022 – Aug 2022",
      description:
        "Trained GANs for synthetic data generation; co-authored IEEE paper.",
      details:
        "During the summer of 2022, I collaborated with a team of MIT researchers on a two-month\
      research initiative focused on Generative Adversarial Networks (GANs). As the second author on the\
      resulting paper, I contributed to both the technical implementation and the academic writing process\
       majorly in introduction section.\
      Specifically, I implemented Gradient Penalty techniques to enhance model stability and successfully\
      reduced overfitting by 15%, while also co-authoring the final manuscript that was later accepted\
      into a peer-reviewed conference.",
      links: [
        { label: "Research Paper", url: "/gan-paper.pdf" },
        { label: "Certificate", url: "/gan-certificate.pdf" },
      ],
      icon: "🧠",
      colorScheme: "purple" as const,
    },
    {
      title: "Wedding Reservation System",
      subtitle: "Jan 2023 – Jun 2023",
      description:
        "Full-stack app for wedding guest management with Java & TypeScript.",
      details:
        "During the final quarter of my freshman year, I developed my first full-stack\
      project: a wedding registration web application. The platform allowed guests to register\
      themselves and family members, specify dietary preferences, and manage RSVP details.\
      I implemented dynamic, interactive forms with expandable dropdown menus, applied conditional\
      UI logic for a seamless user experience, and built a backend powered by RESTful APIs to handle\
      data efficiently and securely. Unfortunately, the source code was completely local and was left in\
      my old laptop.",
      icon: "💒",
      colorScheme: "pink" as const,
    },
    {
      title: "Personal Portfolio Website",
      subtitle: "Aug 2025 - Sep 2025",
      description: "This website you are looking at.",
      details:
        "Decided to create my own website all by myself summer 2025. The github repo is set to public below: ",
      links: [
        {
          label: "Website Github Repo",
          url: "https://github.com/PeterTXYuan/tingxu-portfolio",
        },
      ],
      icon: "🌐",
      colorScheme: "blue" as const,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6 text-4xl">
              💼
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my work spanning machine learning research,
              full-stack development, and creative solutions
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ExpandableCard
              key={idx}
              {...project}
              expanded={activeIndex === idx}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
