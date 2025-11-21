import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  name, phone, and email 
  */
  const [name, setName] = useState(""); 
  const [phone, setPhone] = useState(""); 
  const [email, setEmail] = useState(""); 
  // track for duplicate names
  const [isDuplicate, setIsDuplicate] = useState(false);
  // duplicate check (useEffect to monitor name changes)
  useEffect(()=> {
    // Use .some() to check if a contact with the same name already exists.
    const nameExists = contacts.some(contact => contact.name === name);
    setIsDuplicate(nameExists);
  }, [name, contacts]); // Rerun effect only when name or contacts change
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate){ 
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Contact name already exists!");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} setName={setName} 
        phone={phone} setPhone={setPhone} 
        email={email} setEmail={setEmail} 
        handleSubmit={handleSubmit}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} /> 
      </section>
    </div>
  );
};
