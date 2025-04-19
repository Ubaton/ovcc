import React from 'react';

const page = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About OVCC</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            OVCC (Online Virtual Career Companion) is where education meets innovation. 
            Founded in 2019, we’re on a mission to bridge the gap between high school learning and future success — empowering students, parents, and educators through one smart digital platform.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">🎯 Career-Focused Learning</h4>
            <p className="text-sm text-gray-600">
              Match APS scores to careers & universities using smart tools.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">👩‍🏫 Live & Virtual Tutoring</h4>
            <p className="text-sm text-gray-600">
              Daily support in every subject — at school or online.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">📊 Smart Parent Dashboard</h4>
            <p className="text-sm text-gray-600">
              Real-time insights into performance, attendance & growth.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">⚙️ School Admin Tools</h4>
            <p className="text-sm text-gray-600">
              Effortlessly manage learners, timetables, and reports.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">💡 Skills for Life</h4>
            <p className="text-sm text-gray-600">
              Career-aligned training beyond textbooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default page;
