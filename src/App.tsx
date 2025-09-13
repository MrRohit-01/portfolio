import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import ProjectsSection from "./components/projects";
import ContactMe from "./components/contact";
import About from "./components/about";

function App() {
  return (
    <>
    <div className=" min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black ">
      <Navbar />
      {/* <ImageHero/> */}
  
      {/* <DockDemo/> */}
     <HeroSection/>
      <Skills/>
     
    <About/>
      <ProjectsSection/>
   <ContactMe/> 
         </div>
      {/* <div className="">
      <CommandDock/>
      </div> */}
      </>
  );
}


export default App;
