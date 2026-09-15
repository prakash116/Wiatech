import React from 'react'
import FAQMainPage from '../Components/FAQPage/FAQMainPage'
import AboutFooter from '../Components/AboutPage/AboutFooter'
import FAQ from '../Components/FAQPage/FAQ'
import Video from '../Components/FAQPage/Video'

function FAQPage() {
  return (
    <div>
      <FAQMainPage/>
      <FAQ/>
      <Video/>
      <AboutFooter/>
    </div>
  )
}

export default React.memo(FAQPage)
