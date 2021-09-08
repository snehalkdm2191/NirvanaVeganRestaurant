import React from "react";
import ContactForm from "./ContactForm";
import GoogleMaps from "./GoogleMaps";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="row">
        <div className="col-md-5 contact-timings">
          <h2>Opening Times</h2>
          <span>Monday to Thursday</span>
          <br />
          <span>8:00 am - 9:00 pm</span>
          <br />
          <br />
          <span>Friday to Saturday</span>
          <br />
          <span>8:00 am - 12:00 pm</span>
          <br />
          <br />
          <span>Sunday</span>
          <br />
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
        <div>
          <GoogleMaps
            latitude={59.1996556302625}
            longitude={ 17.625982141850717}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
