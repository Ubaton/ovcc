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
      <div>
        <footer className="bg-white py-8 text-center text-sm text-gray-600 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Accessibility</a>
            <a href="#">Partners</a>
          </div>

          <div className="flex justify-center gap-6 text-gray-600 text-xl">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-x-twitter" /></a>
            <a href="#"><i className="fab fa-github" /></a>
            <a href="#"><i className="fab fa-youtube" /></a>
          </div>

          <p>© 2024 OVC<sup>2</sup>, Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
