import React from "react";
import Hero from "../Components/Hero";
import ContactInfo from "../Components/ContactInfo";

/**
 * Contact is not well refactored, you just hided the code inside ContactInfo instead of decoupling it.
 */
function Contact() {
  return (
    <div>
      <div id="Contact-section">
        <Hero section="contact" />
      </div>
      <ContactInfo />
    </div>
  );
}

export default Contact;
