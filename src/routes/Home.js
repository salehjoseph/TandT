import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeImg from '../assets/home.jpg';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
       <Navbar />
    <Hero 
     Cname='.hero'
     title="Your Mysterious Journey  "
    heroImg={HomeImg}
    text='Choose Your Favoite Destination'
    buttonText='Travel | Plan'
    url='/'
    btnClass='show'
    />
    <Destination />
    <Trip />
    <Footer />
    </>
  )
}

export default Home