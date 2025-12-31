"use client";

export default function ContactPage() {
  const contactMethods = [
    {
      label: "Email",
      value: "yuantingxu20050424@gmail.com",
      href: "mailto:yuantingxu20050424@gmail.com",
      icon: "📧",
      colorScheme: "blue" as const,
    },
    {
      label: "LinkedIn",
      value: "Tingxu Yuan",
      href: "https://www.linkedin.com/in/tingxu-yuan-a2bab5333/",
      icon: "💼",
      colorScheme: "indigo" as const,
    },
    {
      label: "GitHub",
      value: "PeterTXYuan",
      href: "https://github.com/PeterTXYuan",
      icon: "🐙",
      colorScheme: "purple" as const,
    },
  ];

  const colorSchemes = {
    blue: {
      gradient: "from-blue-50 to-cyan-50",
      border: "border-blue-200/50",
      title: "text-blue-900",
      blob: "bg-blue-300/20 group-hover:bg-blue-300/30",
      iconBorder: "border-blue-200/50",
      button: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    indigo: {
      gradient: "from-indigo-50 to-violet-50",
      border: "border-indigo-200/50",
      title: "text-indigo-900",
      blob: "bg-indigo-300/20 group-hover:bg-indigo-300/30",
      iconBorder: "border-indigo-200/50",
      button: "bg-indigo-600 hover:bg-indigo-700 text-white",
    },
    purple: {
      gradient: "from-purple-50 to-pink-50",
      border: "border-purple-200/50",
      title: "text-purple-900",
      blob: "bg-purple-300/20 group-hover:bg-purple-300/30",
      iconBorder: "border-purple-200/50",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 via-transparent to-pink-100/30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-pink-600 rounded-2xl shadow-lg mb-6 text-4xl">
              📬
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let&apos;s connect! I&apos;m always open to discussing new opportunities and
              collaborations
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, idx) => {
            const colors = colorSchemes[method.colorScheme];
            return (
              <a
                key={idx}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`bg-gradient-to-br ${colors.gradient} border-2 ${colors.border} shadow-lg rounded-2xl p-8 md:p-10 hover:shadow-xl transition-all duration-300 relative overflow-hidden group cursor-pointer`}
              >
                {/* Decorative gradient blob */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 ${colors.blob} rounded-full blur-3xl transition-colors`}
                />

                <div className="relative z-10 text-center">
                  <div
                    className={`text-6xl flex-shrink-0 bg-white/80 rounded-xl p-4 shadow-sm border ${colors.iconBorder} mb-6 inline-block`}
                  >
                    {method.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${colors.title} mb-3`}>
                    {method.label}
                  </h3>
                  <p className="text-gray-700 font-medium mb-6 text-base break-words">
                    {method.value}
                  </p>
                  <div
                    className={`${colors.button} px-6 py-3 rounded-lg text-base font-semibold shadow-sm transition-all inline-flex items-center gap-2`}
                  >
                    Get in touch
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
