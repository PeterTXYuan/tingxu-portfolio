export const profile = {
  name: "Tingxu Yuan",
  location: "Seattle, WA",
  phone: "+1 (754) 231-6059",
  phoneHref: "tel:+17542316059",
  email: "yuantingxu20050424@gmail.com",
  emailHref: "mailto:yuantingxu20050424@gmail.com",
  github: "https://github.com/PeterTXYuan",
  linkedin: "https://www.linkedin.com/in/tingxu-yuan-a2bab5333/",
  portrait: "/images/tingxu-portrait.jpg",
  philosophy: {
    lead: "Build with depth,",
    clarity: "lead with clarity.",
    continuation:
      "and leave every system—and every team—better than you found it.",
  },
  headline:
    "Software engineer working across full-stack systems, applied machine learning, and test infrastructure.",
  summary:
    "Math and Computer Science undergraduate with experience in full-stack development, machine learning, software testing, and data analysis. I enjoy turning ambiguous problems into reliable, scalable products.",
};

export const proofPoints = [
  {
    name: "Xiaomi",
    detail: "Software Test Engineering",
    meta: "Current",
  },
  {
    name: "University of Washington",
    detail: "ACMS undergraduate",
    meta: "3.77 GPA",
  },
  {
    name: "IEEE PPRAI",
    detail: "Research Co-author",
    meta: "Publication",
  },
  {
    name: "CEN",
    detail: "President",
    meta: "60+ members led",
  },
];

export const education = {
  school: "University of Washington",
  location: "Seattle, WA",
  degree:
    "B.S. in Applied Computational and Mathematical Sciences (ACMS)",
  period: "Sep 2023 - Present",
  gpa: "3.77 / 4.0",
  honors: "Dean's List, multiple quarters",
  coursework: [
    "Data Structures & Algorithms",
    "Software Development",
    "Artificial Intelligence",
    "Advanced Linear Algebra",
  ],
};

export type PortfolioLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  technologies: string[];
  achievements: string[];
  links?: PortfolioLink[];
  images?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Xiaomi",
    role: "Software Test Engineer Intern",
    period: "Jul 2026 - Present",
    summary:
      "Contributing to an AI-driven mobile test automation platform for Android devices.",
    technologies: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "webpack 5",
      "Flask",
      "MySQL",
      "RabbitMQ",
      "Qdrant",
    ],
    achievements: [
      "Working on case management, multi-device orchestration, and automated result analysis for Android testing.",
      "Building across a React and TypeScript frontend and a Flask and MySQL backend with messaging and vector search infrastructure.",
    ],
    links: [{ label: "Company", href: "https://www.mi.com/global/" }],
  },
  {
    company: "VisionX - Decentralized Energy Marketplace",
    role: "Full-Stack Lead",
    period: "Jun 2025 - Aug 2025",
    summary:
      "Led front-end development for a blockchain energy trading product.",
    technologies: ["React", "Vite", "Ethers.js", "MetaMask", "Hardhat"],
    achievements: [
      "Delivered four responsive product pages and integrated MetaMask with smart contracts for secure ETH transactions.",
      "Reduced load time by 35% through code splitting and lazy loading.",
      "Authored onboarding documentation that cut developer setup time by 50%.",
    ],
    links: [
      { label: "Company", href: "https://www.visionx.llc/" },
      {
        label: "Project repository",
        href: "https://github.com/PeterTXYuan/mallsolar_web3_mvp",
      },
    ],
    images: [
      "/images/mallsolar-1.png",
      "/images/mallsolar-2.png",
      "/images/mallsolar-3.png",
      "/images/mallsolar-4.png",
    ],
  },
  {
    company: "Tianjin Yinhai Software",
    role: "Full-Stack Intern",
    period: "Jun 2024 - Sep 2024",
    summary:
      "Built and optimized modules for a hospital management system.",
    technologies: ["Java", "Spring Boot", "Vue.js", "Redis", "JUnit"],
    achievements: [
      "Implemented role-based access and scheduling workflows.",
      "Refactored backend services into RESTful microservices, reducing API latency by 30%.",
      "Reached 95% test coverage using JUnit and Postman.",
    ],
    links: [{ label: "Company", href: "http://www.tjyinhai.com/" }],
    images: [
      "/images/hospital-management.jpg",
      "/images/hospital-management-2.jpg",
      "/images/hospital-management-3.jpg",
    ],
  },
  {
    company: "Mobalytics",
    role: "Data Science Intern",
    period: "Jun 2022 - Aug 2022",
    summary:
      "Developed a player churn prediction model and behavioral data pipeline.",
    technologies: ["Python", "scikit-learn", "Pandas", "SQL", "TensorFlow"],
    achievements: [
      "Improved churn prediction accuracy by 18%.",
      "Engineered behavioral features from gameplay logs using SQL and Pandas.",
    ],
    links: [{ label: "Company", href: "https://mobalytics.gg/" }],
  },
];

export type Project = {
  title: string;
  eyebrow: string;
  period: string;
  description: string;
  impact: string[];
  technologies: string[];
  links: PortfolioLink[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Decentralized Energy Marketplace",
    eyebrow: "Product engineering",
    period: "2025",
    description:
      "A responsive Web3 marketplace that connects energy trading workflows with wallet-based transactions.",
    impact: [
      "Led front-end delivery across four responsive pages",
      "Integrated MetaMask and smart-contract transactions",
      "Reduced initial load time by 35%",
    ],
    technologies: ["React", "Vite", "Ethers.js", "MetaMask", "Hardhat"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/PeterTXYuan/mallsolar_web3_mvp",
      },
    ],
    image: "/images/mallsolar-1.png",
  },
  {
    title: "Generative Adversarial Network Research",
    eyebrow: "Machine learning research",
    period: "2022",
    description:
      "Research on GAN techniques for synthetic data generation, completed in collaboration with MIT researchers.",
    impact: [
      "Reduced model overfitting by 15%",
      "Contributed to implementation and academic writing",
      "Co-authored an IEEE PPRAI conference paper",
    ],
    technologies: ["Python", "TensorFlow", "GANs", "Research"],
    links: [
      { label: "Read paper", href: "/gan-paper.pdf" },
      { label: "View certificate", href: "/gan-certificate.pdf" },
    ],
  },
  {
    title: "Hospital Management Platform",
    eyebrow: "Enterprise software",
    period: "2024",
    description:
      "Role-based hospital operations software spanning scheduling, services, caching, and automated testing.",
    impact: [
      "Reduced API latency by 30%",
      "Refactored services toward a RESTful architecture",
      "Achieved 95% automated test coverage",
    ],
    technologies: ["Java", "Spring Boot", "Vue.js", "Redis", "JUnit"],
    links: [{ label: "Company", href: "http://www.tjyinhai.com/" }],
    image: "/images/hospital-management.jpg",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    description: "Languages used across product, systems, and coursework.",
    skills: [
      "C / C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "OCaml",
      "Racket",
      "Ruby",
    ],
  },
  {
    title: "Product & frontend",
    description: "Tools for building clear, responsive product experiences.",
    skills: ["React", "Vue", "Redux Toolkit", "Vite", "webpack", "Ethers.js"],
  },
  {
    title: "Backend & infrastructure",
    description: "Application services, persistence, and asynchronous systems.",
    skills: [
      "Spring Boot",
      "Node.js",
      "Flask",
      "MySQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Qdrant",
      "Hardhat",
    ],
  },
  {
    title: "Machine learning & data",
    description: "Applied modeling, experimentation, and data analysis.",
    skills: ["TensorFlow", "scikit-learn", "Pandas", "SQL", "Qdrant"],
  },
];

export const leadership = {
  role: "President",
  organization: "UW China Entrepreneur Network",
  period: "May 2025 - May 2026",
  image: "/images/cen-uw-leadership.png",
  imageAlt: "UW China Entrepreneur Network team outside Paccar Hall",
  description:
    "Led 60+ members in organizing workshops and networking events with an average attendance of 100+ people.",
  links: [
    {
      label: "Organization profile",
      href: "https://www.cenuw.com/",
    },
    { label: "Event overview", href: "/CEN-slides.pdf" },
  ],
};

export const publication = {
  citation:
    "Liu, Z., Yuan, T., et al. (2021). Recent Advances of GANs. IEEE PPRAI Conference Proceedings.",
  href: "/gan-paper.pdf",
};
