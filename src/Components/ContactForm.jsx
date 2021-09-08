import React from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

function ContactForm() {
  return (
    <form className="row">
      <div className="col-md-6">
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="tom@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Date</label>
          <DatePickerComponent id="datepicker" placeholder="Enter date" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Time</label>
          <TimePickerComponent id="time" placeholder="Enter time" />
        </div>
      </div>
      <div className="col-md-6">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-dark btn-book">Book</button>
    </form>
  );
}

export default ContactForm;
