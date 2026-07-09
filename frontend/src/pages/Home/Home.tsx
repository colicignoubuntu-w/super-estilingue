import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Gallery from "../../components/home/Gallery";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
    </>
  );
}

export default Home;