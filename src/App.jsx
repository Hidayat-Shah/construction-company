import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Landing Page Sections
import Hero from './components/Hero'
import ServicesSection from './components/ServiceSection'
import About from './components/About'
import Projects from './components/Projects'
import LetsTalk from './components/Letstalk'
import OurTeam from './components/OurTeam'
import Testimonial from './components/Testimonial'

// Other Pages
import Blog from './Pages/Blog'
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ServicesPage from './Pages/ServicesPAge';
import Loader from "./components/Loader";
import Elements from "./Pages/Elements";
import ProjectDetails from "./Pages/ProjectDetails";
import ServiceDetails from "./Pages/ServiceDetails";





// Landing page content without Navbar/Footer
const LandingPageContent = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <About />
      <Projects />
      <LetsTalk />
      <OurTeam />
      <Testimonial />
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading delay (2 seconds)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPageContent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/projectsdetails" element={<ProjectDetails />} />
        <Route path="/servicesdetails" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
