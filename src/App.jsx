import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import TrustedBrands from "./components/TrustedBrands";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import YourPlan from "./components/YourPlan";
import Contact from "./components/Contact";
import ChatbotWidget from "./components/ChatbotWidget";

const App = () => {
  return (
    <div>
      {/* <div className="h-screen"> */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="absolute bottom-0 right-0">
        <ChatbotWidget />
      </div>
      <Hero />
      {/* </div> */}
      <About />
      <WhyUs />
      <YourPlan />
      <Pricing />
      <TrustedBrands />
      <Portfolio />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
