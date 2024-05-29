import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/2.jpg'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <Navbar />
      <Hero 
     Cname='hero-mid'
     title=" Contact Us "
    heroImg={AboutImg}
    url=''
    btnClass='hide'
    
    />
    <form className="ui form" style={{ margin:" 3.5rem 6rem"}}>
  <div className="field">
    <label style={{fontSize:"1.3rem"}}>First Name</label>
    <input type="text" name="first-name" placeholder="First Name" style={{marginTop:"1.2rem",border:"1px solid black"}} required/>
  </div>
  <div className="field">
    <label style={{fontSize:"1.3rem"}}>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name" style={{marginTop:"1.2rem",border:"1px solid black"}} required/>
  </div>
  <div className="field">
  </div>
  <textarea style={{border:"1px solid black"}}></textarea>
  <div className="ui checkbox">
      <input type="checkbox"  style={{border:"1px solid black"}} checked />
      <label style={{fontSize:".9rem", letterSpacing:'.2rem',marginTop:"1.2rem"}}>I agree to the Terms and Conditions</label>
    </div><br/>
  <button  type="submit" required style={{backgroundColor:'teal',border:"0px solid black",padding:"1rem 1.5rem",marginTop:"1.2rem",borderRadius:"7px"}}>
    Submit
  </button>
</form>

    <Footer />
    
    </>
  )
}

export default Contact