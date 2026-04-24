import Image from "next/image";
import Header from "./components/header/header"; //commit 1
import Hero from "./components/hero/hero"; //commit 2
import Interests from "./components/interests/interests"; //commit 3
import CV from "./components/cv/cv";//commit 4
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero />
    <Interests />
    <CV />
    <Projects />
    </>
  );
}


