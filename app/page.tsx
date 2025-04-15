import Image from "next/image";
import { ResizableNavbar } from "./components/Navbar/Navbar";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import { HeroParallaxDemo } from "./components/HeroParallex/HeroParallex";
import { StickyScrollRevealDemo } from "./components/StickyRoll/StickyRoll";



export default function Home() {
  return (
    <div>
      <ResizableNavbar />
      <WelcomeMessage/>
      <HeroParallaxDemo/>
      <StickyScrollRevealDemo/>
      
      {/* Footer section */}

        <footer className="bg-white py-8 px-4 text-center text-sm text-gray-600 space-y-6">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-700 font-medium text-sm">
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Accessibility</a>
          <a href="#">Partners</a>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 text-gray-600 text-xl">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-x-twitter" /></a>
          <a href="#"><i className="fab fa-github" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2024 Your Company, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
