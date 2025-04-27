"use client";

import { motion } from "framer-motion";
import {
  LightBulbIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UsersIcon,
  ClipboardIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

const sections = [
    {
      id: 1,
      title: "The Problem",
      icon: LightBulbIcon,
      points: [
        "Students lack personalized guidance for academic and career growth.",
        "Parents have minimal insight into their child's academic journey.",
        "Schools struggle with outdated tools and inefficient administration.",
        "Career counseling in schools is generic, outdated, or non-existent.",
      ],
    },
    {
      id: 2,
      title: "Our Solution: OVCC",
      icon: AcademicCapIcon,
      points: [
        "All-in-one platform supporting learners, parents, and educators.",
        "Smart tutoring, career simulation, and real-time student analytics.",
        "A digital ecosystem that connects school performance to career outcomes.",
        "Efficient school admin tools tailored for high school environments.",
      ],
    },
    {
      id: 3,
      title: "Why Now?",
      icon: GlobeAltIcon,
      points: [
        "70% of Africa's population is under 30 — demand for education is surging.",
        "Digital transformation in schools has accelerated post-pandemic.",
        "Governments and NGOs are investing in youth and edtech initiatives.",
        "Mobile-first platforms like OVCC are poised for rapid growth and scale.",
      ],
    },
    {
      id: 4,
      title: "Market Opportunity",
      icon: PresentationChartLineIcon,
      points: [
        "Africa’s edtech market projected to reach $57B+ by 2030.",
        "Over 500M learners across the continent require new education models.",
        "Mobile-first platforms dominate emerging market adoption patterns.",
      ],
    },
    {
      id: 5,
      title: "Business Model",
      icon: ChartBarIcon,
      points: [
        "Subscription-based model for schools and institutions.",
        "Premium learner plans with advanced learning and career tools.",
        "Licensing for enterprise, NGOs, and public-sector programs.",
        "Add-on revenue through certification, upskilling, and consulting.",
      ],
    },
    {
      id: 6,
      title: "Product Highlights",
      icon: ClipboardIcon,
      points: [
        "Mobile-first learner dashboard with gamified modules.",
        "Career simulator aligning APS scores with real-world careers.",
        "Tutor Hub with vetted educators (virtual & on-site).",
        "Parent Portal for live tracking of progress and performance.",
        "Admin Panel for schools with real-time data and insights.",
      ],
    },
    {
      id: 7,
      title: "Traction So Far",
      icon: ArrowTrendingUpIcon,
      points: [
        "Pilots launched in 10+ schools with 5,000+ active students.",
        "Partnerships signed with two major education NGOs.",
        "Prototype app rated 4.8/5 by student testers across 3 regions.",
      ],
    },
    {
      id: 8,
      title: "Financial Highlights",
      icon: CurrencyDollarIcon,
      points: [
        "Projected ARR: $2M by Year 3 post-launch.",
        "Unit economics designed for 80% gross margin after scale.",
        "Low CAC with school partnerships and community growth loops.",
      ],
    },
    {
      id: 9,
      title: "The Team",
      icon: UsersIcon,
      points: [
        "Experienced educators, technologists, and career mentors.",
        "Mission-led founders deeply rooted in African education reform.",
        "Advisors from edtech, youth development, and policy sectors.",
      ],
    },
    {
      id: 10,
      title: "Vision for the Future",
      icon: ArrowTrendingUpIcon,
      points: [
        "Impact 1 million learners across Africa by 2027.",
        "Partner with governments to scale skills development programs.",
        "Launch OVCC Skills Labs focused on tech, trades & entrepreneurship.",
        "Utilize AI for personalized learning journeys and adaptive tutoring.",
      ],
    },
];

export default function Deck() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-gray-800 px-6 py-20 md:px-24 space-y-24">
      {/* BackButton */}
      <BackButton/>
      {/* Hero */}
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <BackButton />
        <h1 className="text-4xl md:text-5xl font-bold text-mirage">
          Invest in Africa’s Next Generation
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          OVCC is building Africa&apos;s smartest education ecosystem — where <span className="font-semibold text-mirage">data meets guidance</span> and students <span className="font-semibold text-mirage">become future-ready leaders.</span>
        </p>
      </motion.div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-12">
        {sections.map(({ id, title, points, icon: Icon }) => (
          <motion.div
            key={id}
            className="rounded-2xl p-8 space-y-6 shadow-md bg-white border border-gray-100 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-mirage/10 rounded-full">
                <Icon className="w-7 h-7 text-mirage" />
              </div>
              <h3 className="text-xl font-bold text-mirage">
                {String(id).padStart(2, "0")} / {title}
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              {points.map((point, i) => (
                <li key={i}>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center pt-20 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-mirage">
          Shape Africa’s Future with Us
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Become part of a movement revolutionizing how millions learn, grow, and succeed. Explore our investor materials or start a conversation today.
        </p>
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="border border-mirage text-mirage px-6 py-3 rounded-full font-semibold hover:bg-mirage hover:text-gray-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
