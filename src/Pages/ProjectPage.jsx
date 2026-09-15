import React, { lazy, Suspense } from 'react';
import ProjectMainPage from '../Components/ProjectPage/ProjectMainPage';
import ProjectList from '../Components/ProjectPage/ProjectList';
import AboutFooter from '../Components/AboutPage/AboutFooter';


// Lazy load components
// const ProjectMainPage = lazy(() => import('../Components/ProjectPage/ProjectMainPage'));
// const ProjectList = lazy(() => import('../Components/ProjectPage/ProjectList'));
// const AboutFooter = lazy(() => import('../Components/AboutPage/AboutFooter'));

function ProjectPage() {
  return (
    <Suspense>
      <div>
        <ProjectMainPage />
        <ProjectList />
        <AboutFooter />
      </div>
    </Suspense>
  );
}

export default React.memo(ProjectPage);
