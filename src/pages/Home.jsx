import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Feautres";
import BrandTicker from "../components/BrandTicker";
import LayoutContent from "../components/LayoutContent";
import Section4 from "../components/Section4";
import DifferentiationSection from "../components/DiffrentialSec";
import TestimonialsSection from "../components/Testimonial";
import WhoWeServeSection from "../components/WhoServer";
import ContactSection from "../components/Contact";
import FAQSection from "../components/FaQSection";
import FooterSection from "../components/Footer";



const Home = () => {
  return (
    <>
       <Navbar />
      <Hero />
      <BrandTicker />
      <Features />
      <Section4 />
      <DifferentiationSection />
      <TestimonialsSection />
    
      <WhoWeServeSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />

    </>
  )
}

export default Home
