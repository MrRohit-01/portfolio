import { DockDemo } from "./components/dock";
import HeroSection from "./components/HeroSection";
import ImageHero from "./components/ImageHero";
import { ThemeProvider, useTheme } from "./hooks/useTheme";
import Navbar from "./components/navbar";
import CommandDock from "./components/command";
import Skills from "./components/skills";
import Projects from "./components/projects";

function App() {
  return (
    <>
    <div className=" bg-[#37353E] opacity-90% w-screen">
      <Navbar />
      {/* <ImageHero/> */}\
  
      {/* <DockDemo/> */}
     <HeroSection/>
     <Skills/>
     <Projects/>
    </div>
      {/* <div className="">
      <CommandDock/>
      </div> */}
      </>
  );
}


export default App;
