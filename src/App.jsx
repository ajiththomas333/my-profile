import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Services from './Components/Services/Services'
import About from './Components/About/About'

import Myworks from './Components/Mywork/Myworks'
import Contact from './Components/contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
     <Myworks/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
