'use client';

import ExpandableCard from "@/components/ExpandableCard";
import { useState } from "react";

export default function ExperiencePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "VisionX – Decentralized Energy Marketplace",
      subtitle: "Full-Stack Lead | Jun 2025 – Aug 2025",
      description: "Led blockchain-based energy trading dApp development with React & Hardhat.",
      details: "Led front-end development for blockchain energy trading dApp with 4 responsive pages. Integrated MetaMask & smart contracts, enabling secure ETH transactions. Reduced load time by 35% via code splitting & lazy loading. Authored onboarding docs, cutting developer setup time by 50%.",
      links: [{ label: "Company Website", url: "https://www.visionx.llc/" },
              { label: "Web3 Project Repo", url: "https://github.com/PeterTXYuan/mallsolar_web3_mvp" }],
    },
    {
      title: "Tianjin Yinhai Software",
      subtitle: "Full-Stack Intern | Jun 2024 – Sep 2024",
      description: "Developed hospital management system using Spring Boot & Vue.js.",
      details: "Built hospital management system with role-based access & scheduling. Refactored backend to RESTful microservices, cutting API latency by 30%. Achieved 95% test coverage using JUnit & Postman.",
      links: [{ label: "Company Website", url: "http://www.tjyinhai.com/" }],
    },
    {
      title: "Mobalytics",
      subtitle: "Data Science Intern | Jun 2022 – Aug 2022",
      description: "Developed churn prediction model improving accuracy by 18%.",
      details: "Built churn prediction model improving accuracy by 18%. Engineered behavioral features from gameplay logs using SQL & Pandas.",
      links: [{ label: "Company Website", url: "https://mobalytics.gg/" }],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <ExpandableCard
            key={idx}
            {...exp}
            expanded={activeIndex === idx}
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
          />
        ))}
      </div>
    </main>
  );
}
