import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import Contact from "../components/Contact";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";

const MainPage = () => {
  return (
    <PageTransition>
      <NavBar />
      <Hero />
      <Solutions />
      <Portfolio />
      <Services />
      <FAQ />
      <About />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </PageTransition>
  );
};

export default MainPage;
