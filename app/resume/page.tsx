"use client";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-orange-100/30" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg mb-6 text-4xl">
              📄
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download my resume to learn more about my experience and
              qualifications
            </p>
          </div>
        </div>
      </div>

      {/* Resume Card */}
      <div className="relative max-w-2xl mx-auto px-6 md:px-12 pb-20">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-orange-200/50 shadow-lg rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-300/20 group-hover:bg-orange-300/30 rounded-full blur-3xl transition-colors" />

          <div className="relative z-10 text-center">
            <div className="text-6xl mb-6 inline-block bg-white/80 rounded-xl p-4 shadow-sm border border-orange-200/50">
              📄
            </div>
            <h2 className="text-3xl font-bold text-orange-900 mb-4">
              Tingxu Yuan - Resume
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              A comprehensive overview of my education, experience, and skills
            </p>
            <a
              href="/Tingxu_Yuan_CV_English_4.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <span>Download PDF</span>
              <span className="text-2xl">⬇</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Opens in a new tab
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
