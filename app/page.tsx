import Image from "next/image";
import { ResizableNavbar } from "./components/Navbar/Navbar";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import { HeroParallaxDemo } from "./components/HeroParallex/HeroParallex";



export default function Home() {
  return (
    <div>
      <ResizableNavbar />
      <WelcomeMessage/>
      <HeroParallaxDemo/>
      <h1 className="flex justify-center items-center pt-40 text-4xl bg-amber-300">
        Hello OVC<sup>2</sup>
      </h1>
    </div>
  );
}
