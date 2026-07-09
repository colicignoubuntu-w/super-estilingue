import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Gallery from "../../components/home/Gallery";
import Tickets from "../../components/home/Tickets";

function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Gallery />
    <Tickets />
  </>
  );
}

export default Home;