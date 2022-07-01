import Header from "../components/sections/Header/Header";
import Nav from "../components/sections/Nav/Nav";
import Welcome from "../components/sections/Welcome/Welcome";
import About from "../components/sections/About/About";
import Pricing from "../components/sections/Pricing/Pricing";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/sections/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <Welcome />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
