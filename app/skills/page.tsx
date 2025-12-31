"use client";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C/C++", "Java", "Python", "JavaScript", "TypeScript", "SQL", "Lua"],
      colorScheme: "blue" as const,
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: [
        "React",
        "Vue",
        "Node.js",
        "Spring Boot",
        "MySQL",
        "MongoDB",
        "Redis",
        "Docker",
        "Git",
        "Kubernetes",
      ],
      colorScheme: "purple" as const,
    },
    {
      title: "ML/Data",
      icon: "🤖",
      skills: [
        "Pandas",
        "NumPy",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Matplotlib",
      ],
      colorScheme: "green" as const,
    },
    {
      title: "Specialties",
      icon: "⭐",
      skills: [
        "Web3 dApp Development",
        "Smart Contract Integration",
        "API Design",
        "Performance Optimization",
      ],
      colorScheme: "orange" as const,
    },
  ];

  const colorSchemes = {
    blue: {
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200/50",
      title: "text-blue-900",
      skillBg: "bg-blue-100/80 hover:bg-blue-200/80",
      skillText: "text-blue-800",
      blob: "bg-blue-300/20 group-hover:bg-blue-300/30",
    },
    purple: {
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200/50",
      title: "text-purple-900",
      skillBg: "bg-purple-100/80 hover:bg-purple-200/80",
      skillText: "text-purple-800",
      blob: "bg-purple-300/20 group-hover:bg-purple-300/30",
    },
    green: {
      gradient: "from-emerald-50 to-teal-50",
      border: "border-emerald-200/50",
      title: "text-emerald-900",
      skillBg: "bg-emerald-100/80 hover:bg-emerald-200/80",
      skillText: "text-emerald-800",
      blob: "bg-emerald-300/20 group-hover:bg-emerald-300/30",
    },
    orange: {
      gradient: "from-orange-50 to-amber-50",
      border: "border-orange-200/50",
      title: "text-orange-900",
      skillBg: "bg-orange-100/80 hover:bg-orange-200/80",
      skillText: "text-orange-800",
      blob: "bg-orange-300/20 group-hover:bg-orange-300/30",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg mb-6 text-4xl">
              🎯
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Skills
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I work with to build scalable solutions
            </p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const colors = colorSchemes[category.colorScheme];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Decorative gradient blob */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${colors.blob} rounded-full blur-3xl transition-colors`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`text-4xl flex-shrink-0 bg-white/80 rounded-xl p-2 shadow-sm border ${colors.border}`}
                    >
                      {category.icon}
                    </div>
                    <h2 className={`text-2xl font-bold ${colors.title}`}>
                      {category.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className={`px-4 py-2 ${colors.skillBg} ${colors.skillText} rounded-lg text-sm font-medium shadow-sm transition-all`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
