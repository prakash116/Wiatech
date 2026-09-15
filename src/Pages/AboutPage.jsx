import React from "react";
import { motion } from "framer-motion";
import AboutFooter from "../Components/AboutPage/AboutFooter";
import AboutMainPage from "../Components/AboutPage/AboutMainPage";
import AboutCompany from "../Components/AboutPage/AboutCompany";
import Boxs from "../Components/AboutPage/Boxs";
import AboutTeam from "../Components/AboutPage/AboutTeam";
import FunFact from "../Components/AboutPage/FunFact";
import AboutTestimonial from "../Components/AboutPage/AboutTestimonial";
import GlobalPartner from "../Components/AboutPage/GlobalPartner";

// Lazy load components for better performance
// const AboutMainPage = lazy(() => import("../Components/AboutPage/AboutMainPage"));
// const AboutCompany = lazy(() => import("../Components/AboutPage/AboutCompany"));
// const Boxs = lazy(() => import("../Components/AboutPage/Boxs"));
// const AboutTeam = lazy(() => import("../Components/AboutPage/AboutTeam"));
// const FunFact = lazy(() => import("../Components/AboutPage/FunFact"));
// const AboutTestimonial = lazy(() => import("../Components/AboutPage/AboutTestimonial"));
// const GlobalPartner = lazy(() => import("../Components/AboutPage/GlobalPartner"));

// Main About Page Component
function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
        {/* Hero Section */}
        <section>
          <AboutMainPage />
        </section>

        {/* Company Info */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <AboutCompany />
        </motion.section>

        {/* Boxes Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Boxs />
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <AboutTeam />
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FunFact />
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <AboutTestimonial />
        </motion.section>

        {/* Global Partners */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlobalPartner />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutFooter />
        </motion.section>
    </motion.div>
  );
}

// Export with memo for performance
export default React.memo(AboutPage);