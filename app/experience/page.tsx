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
      details: (
        <>
        During the summer before my junior year, I joined VisionX after a strong performance in the 
        technical interview. Initially tasked with front-end development for a decentralized energy trading dApp,
        I quickly became project lead after demonstrating fast onboarding and strong technical execution.<br /> <br />
        Over the internship, I developed four fully responsive pages (Main, Marketplace, About Us, Login), 
        integrated MetaMask wallet with smart contracts for local ETH transactions, and optimized UI performance
        using Chakra UI. Through code splitting and lazy loading, we reduced initial load time by 35%. Additionally,
        I authored onboarding/offboarding guides that accelerated new developer setup time by 50%, ensuring smoother
        collaboration within the team.
        </>
      ),
      links: [{ label: "Company Website", url: "https://www.visionx.llc/" },
              { label: "Web3 Project Repo", url: "https://github.com/PeterTXYuan/mallsolar_web3_mvp" }],
      images: ["/images/mallsolar-1.png","/images/mallsolar-2.png","/images/mallsolar-3.png","/images/mallsolar-4.png"]
    },
    {
      title: "Tianjin Yinhai Software",
      subtitle: "Full-Stack Intern | Jun 2024 – Sep 2024",
      description: "Developed hospital management system using Spring Boot & Vue.js.",
      details: (
        <>
        My first in-person internship provided experience working with a large-scale hospital management
        system involving 50+ repository files. I contributed to the integration of role-based access and scheduling
        modules, refactored the monolithic backend into RESTful microservices, and achieved a 30% reduction in API
        latency using Redis caching.<br /><br /> I collaborated with a team of junior developers to implement automated 
        tests with JUnit and Postman, reaching 95% test coverage. This experience introduced me to enterprise-level development 
        practices and earned positive feedback from project managers, along with an official offboarding certificate.
        </>
      ),
      links: [{ label: "Company Website", url: "http://www.tjyinhai.com/" }],
      images: ["/images/hospital-management.jpg", "/images/hospital-management-2.jpg", "/images/hospital-management-3.jpg"],
    },
    {
      title: "Mobalytics",
      subtitle: "Data Science Intern | Jun 2022 – Aug 2022",
      description: "Developed churn prediction model improving accuracy by 18%.",
      details: "At Mobalytics, I developed a player churn prediction model that improved accuracy by 18%, leveraging\
      scikit-learn and SQL-based data pipelines. Under mentorship from senior data scientists, I engineered behavioral\
      features from gameplay logs using SQL and Pandas, created interactive data visualizations, and delivered analytical\
      reports to inform product decisions in the gaming market.",
      links: [{ label: "Company Website", url: "https://mobalytics.gg/" }],
    },
    {
      title: "CENUW (China Entrepreneur Network at UW)",
      subtitle: "President | May 2025 - present",
      description: "Elected President of CENUW for the 2025–26 academic year at the University of Washington",
      details: "UWCEN (University of Washington China Entrepreneur Network) is a registered non-profit student organization \
      focused on connecting UW students with industry professionals and fostering entrepreneurship. I joined as a freshman, \
      actively contributed to all four major events in my first two quarters, and was soon promoted to Event Planning Lead \
      in Spring 2025. In May 2025, I was elected President for the upcoming academic year, where I will lead 60+ members and \
      organize large-scale networking events with an expected average attendance of over 100 participants.",
      links: [
        { label: "Club Details", url: "https://huskylink.washington.edu/organization/cenuw" },
        { label: "More Details Slides", url:"/CEN-slides.pdf" }
      ],
    }
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
