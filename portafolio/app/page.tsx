import Image from "next/image";
import Header from "./components/header/header"; //commit 1
import Hero from "./components/hero/hero"; //commit 2
import Interests from "./components/interests/interests";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero />
    <Interests />
    </>
  );
}


