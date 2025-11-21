import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
 // current name, contact, date, and time
 const [name, setName] = useState(""); 
 const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : "");
 const [date, setDate] = useState(""); 
 const [time, setTime] = useState(""); 


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(name, contact, date, time);
    setName("");
    setContact(contacts.length > 0 ? contacts[0].name : "");
    setDate("");
    setTime("");
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={name} 
        setTitle={setName} 
        contact={contact} 
        setContact={setContact} 
        date={date} 
        setDate={setDate} 
        time={time} 
        setTime={setTime} 
        contacts={contacts}
        handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} /> 
      </section>
    </div>
  );
};