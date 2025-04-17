import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/our-story" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Platform",
    links: [
      { name: "How it Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
      { name: "For Schools", href: "/for-schools" },
      { name: "For Students", href: "/for-students" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "POPI Act", href: "/popi-act" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 md:px-20 mt-10 border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">OVCC</h2>
          <p className="text-sm text-gray-700">
            Where education evolves and futures begin.
          </p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-sky-600 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
        © {new Date().getFullYear()} OVCC. All rights reserved. <br />
        <span className="mt-1 flex items-center justify-center gap-2">
          <span className="inline-block animate-spinSlow">🌍</span>
          Built for the future of African education.
        </span>
      </div>
    </footer>
  );
}
