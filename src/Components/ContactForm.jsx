import React,{useState} from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";

export default function ContactForm() {
  const [name, setName] = useState("");
  function onClickHandler(e) {
    e.preventDefault();
    if (name.trim() !== "") {
      alert("Hi " + name + ",\n Booking Confirm. \n We are pleased to inform you that your reservation request has been received.");
    }
    else{
      alert("Please fill the form..");
    }
  }

  return (
    <form className="row">
      <div className="col-md-6">
        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Snehal"
            onChange={(e) => setName(e.target.value)}
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
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="tom@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-dark btn-book" onClick={onClickHandler}>Book</button>
    </form>
  );
}
