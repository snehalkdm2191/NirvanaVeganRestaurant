import React from "react";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="row">
        <div className="col-md-12 text-center contact-timings">
          <h2>Opening Times</h2>
          <h5>Monday to Thursday</h5>
          <span>8:00 am - 9:00 pm</span>
          <h5>Friday to Saturday</h5>
          <span>8:00 am - 12:00 pm</span>
          <h5>Sunday</h5>
          <span>8:00 am - 10:00 pm</span>
        </div>
        <div className="col-md-12 contact-form">
          <h2>Book Your Table</h2>
          <ContactForm />
        </div>
        <div className="col-md-12 text-center contact-Address">
          <h2>Address</h2>
          <p>Stockholm,Sweden</p>
        </div>
          <GoogleMaps
            latitude={59.1996556302625}
            longitude={ 17.625982141850717}
          />
      </div>
    </div>
  );
}
