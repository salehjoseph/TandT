import Navbar from '../components/Navbar'
import React from 'react'
import Hero from '../components/Hero'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'
function Service() {
  return (
    <>
      <Navbar />
      <Navbar />
      <Navbar />
      <Hero 
     Cname='hero-mid'
     title=" Service "
    heroImg={AboutImg}
    url='/service'
    btnClass='hide'
    text='Choose Your Favoite Destination'
    buttonText='Travel | Plan'
    />
    <Trip />
    <Footer />
    </>
  )
}

export default Service