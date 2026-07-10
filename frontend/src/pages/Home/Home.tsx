import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero";
import About from "../../components/home/About";
import Gallery from "../../components/home/Gallery";
import Tickets from "../../components/home/Tickets";
import Restaurant from "../../components/home/Restaurant";
import Testimonials from "../../components/home/Testimonials";
import Contact from "../../components/home/Contact";
import Footer from "../../components/home/Footer";
import WhatsAppButton from "../../components/layout/WhatsAppButton";

function Home() {
  return (
  <>
    <Navbar />
    <Hero />
    <About />
    <Gallery />
    <Tickets />
    <Restaurant />
    <Testimonials />
    <Contact />
    <Footer />
    <WhatsAppButton />
  </>
  );
}

export default Home;