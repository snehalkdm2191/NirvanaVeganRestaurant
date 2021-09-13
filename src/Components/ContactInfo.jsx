import React from "react";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

// use 1 single line export
// This component can be directly place in contact by creating better sub components like OpeningTimes, BookingForm, Map (this is actually done), etc.
function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="row">
        <div className="col-md-5 contact-timings">
          <h2>Opening Times</h2>
          {/* the br's can be replaced by CSS code */}
          {/* days are h3 so you can used them to separate the text instead of using double <br/> */}
          <span>Monday to Thursday</span>
          <span>8:00 am - 9:00 pm</span>
          <span>Friday to Saturday</span>
          <span>8:00 am - 12:00 pm</span>
          <span>Sunday</span>
          {/* days are h3 so you can used them to separate the text instead of using double <br/> */}
          <span>8:00 am - 10:00 pm</span>
        </div>
        <div className="col-md-7 contact-form">
          <h2>Book Your Table</h2>
          <ContactForm />
        </div>
        <div className="col-md-12 text-center contact-Address">
          <h2>Address</h2>
          <p>Stockholm,Sweden</p>
        </div>
        {/* You dont need a div, unless you need to a css class, this can be directly GoogleMap */}
        <GoogleMaps
          latitude={59.1996556302625}
          longitude={17.625982141850717}
        />
      </div>
    </div>
  );
}

export default ContactInfo;
