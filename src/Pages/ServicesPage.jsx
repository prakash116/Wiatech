import React, { lazy, Suspense } from 'react'
import ServiceMainPage from '../Components/ServicesPage/ServiceMainPage';
import ServiceSolutions from '../Components/ServicesPage/ServiceSolutions';
import PopularServices from '../Components/ServicesPage/PopularServices';
import SecuritySolutions from '../Components/ServicesPage/SecuritySolutions';
import Consultations from '../Components/ServicesPage/Consultations';
import WhyChooseUs from '../Components/ServicesPage/WhyChooseUs';
import AboutFooter from '../Components/AboutPage/AboutFooter';


// Lazy load components
// const ServiceMainPage = lazy(() => import('../Components/ServicesPage/ServiceMainPage'))
// const ServiceSolutions = lazy(() => import('../Components/ServicesPage/ServiceSolutions'))
// const PopularServices = lazy(() => import('../Components/ServicesPage/PopularServices'))
// const SecuritySolutions = lazy(() => import('../Components/ServicesPage/SecuritySolutions'))
// const Consultations = lazy(() => import('../Components/ServicesPage/Consultations'))
// const WhyChooseUs = lazy(() => import('../Components/ServicesPage/WhyChooseUs'))
// const AboutFooter = lazy(() => import('../Components/AboutPage/AboutFooter'))

function ServicesPage() {
  return (
    <Suspense>
      <div>
        <ServiceMainPage/>
        <ServiceSolutions/>
        <PopularServices/>
        <SecuritySolutions/>
        <WhyChooseUs/>
        <Consultations/>
        <AboutFooter/>
      </div>
    </Suspense>
  )
}

export default React.memo(ServicesPage)