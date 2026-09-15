import { useState, useEffect } from "react";
import "./App.css";
import BackgroundCursorEffects from "./Components/BackgroundCursorEffects";
import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import FAQPage from "./Pages/FAQPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import Loading from "./Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading for exactly 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HashRouter>
        {/* Show loading for 2 seconds on initial visit/refresh */}
        {isLoading && <Loading />}
        
        {/* Only show content after loading */}
        {!isLoading && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/project" element={<ProjectPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <BackgroundCursorEffects />
          </>
        )}
      </HashRouter>
    </>
  );
}

export default App;