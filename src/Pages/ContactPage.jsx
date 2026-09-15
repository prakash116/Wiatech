import React from 'react'
import ContactMainPage from '../Components/ContactPage/ContactMainPage'
import GetInTouch from '../Components/ContactPage/GetInTouch'
import AboutFooter from '../Components/AboutPage/AboutFooter'

function ContactPage() {
  return (
    <div>
      <ContactMainPage/>
      <GetInTouch/>
      <AboutFooter/>
    </div>
  )
}

export default React.memo(ContactPage)
