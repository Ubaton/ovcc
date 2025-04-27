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
} from "@heroicons/react/24/outline";
import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";

const sections = [
  {
    id: 1,
    title: "The Problem",
    icon: LightBulbIcon,
    // bg: "bg-orange-50",
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
    // bg: "bg-blue-50",
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
    // bg: "bg-green-50",
    points: [
      "70% of Africa’s population is under 30 — demand for education is surging.",
      "Digital transformation in schools has accelerated post-pandemic.",
      "Governments and NGOs are investing in youth and edtech initiatives.",
      "Mobile-first platforms like OVCC are poised for rapid growth and scale.",
    ],
  },
  {
    id: 4,
    title: "Business Model",
    icon: ChartBarIcon,
    // bg: "bg-yellow-50",
    points: [
      "Subscription-based model for schools and institutions.",
      "Premium learner plans with advanced learning and career tools.",
      "Licensing for enterprise, NGOs, and public-sector programs.",
      "Add-on revenue through certification, upskilling, and consulting.",
    ],
  },
  {
    id: 5,
    title: "Product Highlights",
    icon: ClipboardIcon,
    // bg: "bg-teal-50",
    points: [
      "Mobile-first learner dashboard with gamified modules.",
      "Career simulator aligning APS scores with real-world careers.",
      "Tutor Hub with vetted educators (virtual & on-site).",
      "Parent Portal for live tracking of progress and performance.",
      "Admin Panel for schools with real-time data and insights.",
    ],
  },
  {
    id: 6,
    title: "The Team",
    icon: UsersIcon,
    // bg: "bg-indigo-50",
    points: [
      "Experienced educators, technologists, and career mentors.",
      "Mission-led founders deeply rooted in African education reform.",
      "Advisors from edtech, youth development, and policy sectors.",
    ],
  },
  {
    id: 7,
    title: "Vision for the Future",
    icon: ArrowTrendingUpIcon,
    // bg: "bg-purple-50",
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
    <section className="bg-white text-gray-800 px-6 py-20 md:px-24 space-y-24">
      {/* Hero */}
      <motion.div
        className="text-center max-w-3xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Back Button */}
        <BackButton />

        <h1 className="text-4xl md:text-5xl font-bold text-mirage">
          Invest in the Future of Learning
        </h1>
        <p className="text-gray-600 text-lg">
          OVCC is building Africa&apos;s smartest learning ecosystem — where data meets guidance, and students become future-ready.
        </p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-20">
        {sections.map(({ id, title, points, icon: Icon }) => (
          <motion.div
            key={id}
            className={"rounded-xl p-8 md:p-12 space-y-6 shadow-sm"}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Icon className="w-8 h-8 text-mirage" />
              <h3 className="text-2xl font-bold text-mirage">
                {String(id).padStart(2, "0")} / {title}
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              {points.map((point, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center pt-20 space-y-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-mirage">
          Join us in shaping the next generation of learners.
        </h3>
        <p className="text-gray-600">Download our investor pack or reach out for a conversation.</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/OVCC_Investor_Deck.pdf"
            download
            className="bg-mirage text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
          >
            Download Deck
          </Link>
          <Link
            href="/#contact"
            className="border border-mirage text-mirage px-6 py-3 rounded-lg font-medium hover:bg-mirage hover:text-white transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
