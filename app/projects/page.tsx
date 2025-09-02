'use client';

import { useState } from "react";
import ExpandableCard from "@/components/ExpandableCard";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "GAN Research",
      subtitle: "Jun 2022 – Aug 2022",
      description: "Trained GANs for synthetic data generation; co-authored IEEE paper.",
      details:"During the summer of 2022, I collaborated with a team of MIT researchers on a two-month\
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
    },
    {
      title: "Wedding Reservation System",
      subtitle: "Jan 2023 – Jun 2023",
      description: "Full-stack app for wedding guest management with Java & TypeScript.",
      details: "During the final quarter of my freshman year, I developed my first full-stack\
      project: a wedding registration web application. The platform allowed guests to register\
      themselves and family members, specify dietary preferences, and manage RSVP details.\
      I implemented dynamic, interactive forms with expandable dropdown menus, applied conditional\
      UI logic for a seamless user experience, and built a backend powered by RESTful APIs to handle\
      data efficiently and securely. Unfortunately, the source code was completely local and was left in\
      my old laptop.",
    },
    {
      title: "Personal Protfolio Website",
      subtitle: "Aug 2025 - Sep 2025",
      description: "This website you are looking at.",
      details: "Decided to create my own website all by myself summer 2025. The github repo is set to public: ",
      links: [{ label: "Website Github Repo", url:"https://github.com/PeterTXYuan/tingxu-portfolio" }]
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ExpandableCard
            key={idx}
            {...project}
            expanded={activeIndex === idx}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </main>
  );
}
