import React, { Suspense } from 'react';
import BackgroundCarousel from '../Components/LandingPage/BackgroundCarousel';
import IconsCarousel from '../Components/LandingPage/IconsCarousel';
import Info from '../Components/LandingPage/Info';
import About from '../Components/LandingPage/About';
import Services from '../Components/LandingPage/Services';
import Solutions from '../Components/LandingPage/Solutions';
import ServicesCarousel from '../Components/LandingPage/ServicesCarousel';
import Teams from '../Components/LandingPage/Teams';
import ModernTech from '../Components/LandingPage/ModernTech';
import ServiceProvide from '../Components/LandingPage/ServiceProvide';
import Discuss from '../Components/LandingPage/Discuss';
import Testimonial from '../Components/LandingPage/Testimonial';
import Blog from '../Components/LandingPage/Blog';
import Footer from '../Components/Footer';
import Footer1 from '../Components/Footer1';


// // Lazy load all components
// const BackgroundCarousel = lazy(() => import('../Components/LandingPage/BackgroundCarousel'));
// const IconsCarousel = lazy(() => import('../Components/LandingPage/IconsCarousel'));
// const Info = lazy(() => import('../Components/LandingPage/Info'));
// const About = lazy(() => import('../Components/LandingPage/About'));
// const Services = lazy(() => import('../Components/LandingPage/Services'));
// const Solutions = lazy(() => import('../Components/LandingPage/Solutions'));
// const ServicesCarousel = lazy(() => import('../Components/LandingPage/ServicesCarousel'));
// const Teams = lazy(() => import('../Components/LandingPage/Teams'));
// const ModernTech = lazy(() => import('../Components/LandingPage/ModernTech'));
// const ServiceProvide = lazy(() => import('../Components/LandingPage/ServiceProvide'));
// const Discuss = lazy(() => import('../Components/../Components/LandingPage//Discuss'));
// const Testimonial = lazy(() => import('../Components/LandingPage/Testimonial'));
// const Blog = lazy(() => import('../Components/LandingPage/Blog'));
// const Footer = lazy(() => import('../Components/Footer'));
// const Footer1 = lazy(() => import('../Components/Footer1'));

function LandingPage() {
  return (
    <Suspense>
      <div>
        <BackgroundCarousel />
        <IconsCarousel />
        <Info />
        <About />
        <Services />
        <Solutions />
        <ServicesCarousel />
        <Teams />
        <ModernTech />
        <ServiceProvide />
        <Discuss />
        <Testimonial />
        <Blog />
        <ServicesCarousel />
        <Footer />
        <Footer1 />
      </div>
    </Suspense>
  );
}

export default React.memo(LandingPage);
