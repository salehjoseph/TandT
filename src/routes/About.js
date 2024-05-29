import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
function About() {
  return (
    <>
      <Navbar />
      <Hero 
     Cname='hero-mid'
     title=" About "
    heroImg={AboutImg}
    url='/about'
    btnClass='hide'
    text='Choose Your Favoite Destination'
    buttonText='Travel | Plan'
  
    />
    <AboutUs />
    <Footer />
    </>
  )
}

export default About