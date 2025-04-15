"use client";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
import { useState } from "react";

export function ResizableNavbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },    {
      name: "FAQ",
      link: "#faq",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="container mx-auto p-8 pt-24">
      <BackgroundBeamsWithCollision>
          <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight relative z-20">
            Welcome to <span className="text-sky-600"> OVC<sup>2</sup> </span> —{" "}
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-400 to-green-500">
                Where education evolves,
              </span>
            </span>
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-sky-400 to-green-500">
                and futures begin.
              </span>
            </span>
          </h2>    
      </BackgroundBeamsWithCollision>
    </div>
  );
};
