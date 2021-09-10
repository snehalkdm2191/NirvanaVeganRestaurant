import React from "react";
import Hero from "../Components/Hero";
import ContactInfo from "../Components/ContactInfo";

function Contact() {
  return (
    <div>
      <div id="Contact-section">
        <Hero section="contact"/>
      </div>
        <ContactInfo/>
        
    </div>
  );
}

export default Contact;
