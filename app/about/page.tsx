import { GraduationCap, Users, FileText, Cog, Lightbulb } from "lucide-react";

export default function page() {
  return (
    <section
      id="about"
      className="relative bg-white text-gray-800 py-20 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Accent Blob */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-aqua-island/30 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-24">
        {/* About Text Section */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">About OVCC</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            OVCC (Online Virtual Career Companion) was born from a simple idea: that every learner deserves a fair shot at success — not just in school, but in life.
            <br /><br />
            Founded in 2019, we blend smart technology, real educators, and a deep understanding of Africa’s academic challenges to guide learners, empower parents, and support schools from the ground up.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<GraduationCap size={28} className="text-reddish-orange" />}
            title="Career-Focused Learning"
            description="Match APS scores to careers & universities using smart tools."
          />
          <FeatureCard
            icon={<Users size={28} className="text-reddish-orange" />}
            title="Live & Virtual Tutoring"
            description="Daily support in every subject — at school or online."
          />
          <FeatureCard
            icon={<FileText size={28} className="text-reddish-orange" />}
            title="Parent Dashboard"
            description="Real-time insights into performance, attendance & growth."
          />
          <FeatureCard
            icon={<Cog size={28} className="text-reddish-orange" />}
            title="School Admin Tools"
            description="Effortlessly manage learners, timetables, and reports."
          />
          <FeatureCard
            icon={<Lightbulb size={28} className="text-reddish-orange" />}
            title="Skills for Life"
            description="Career-aligned training beyond textbooks."
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-10" />

        {/* Our Story Timeline Style */}
        <div className="space-y-6 text-center">
          <h3 className="text-3xl font-bold">Our Story</h3>
          <div className="max-w-3xl mx-auto text-gray-600 text-lg space-y-4">
            <p>
              We started as a small team with one big question: how can we help learners see what’s possible after school?
            </p>
            <p>
              Since 2019, OVCC has grown into a trusted digital companion — used in schools, homes, and communities to guide students from confusion to clarity.
            </p>
            <p>
              Today, OVCC is more than a platform. It’s a movement built on hope, technology, and the belief that the future belongs to every student — if they’re shown the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition bg-white space-y-4 text-left">
      <div className="flex items-center space-x-3">
        <div className="bg-reddish-orange/10 p-2 rounded-full">{icon}</div>
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-gray-600 pl-12">{description}</p>
    </div>
  );
}
