import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Name: 
        <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <label>Phone: 
        <input 
        type="tel" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        pattern="^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$" 
        />
        </label>
      <label>Email: 
        <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        />
        </label>
      <input type="submit" value="Add Contact" />
    </form> 
    </>
  );
};
