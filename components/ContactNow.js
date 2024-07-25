import React from 'react';

function ContactNow() {
  return (
    <section id="contact-now" className="contact-now fade-in">
      <h2>Contact NOW!</h2>
      <form className="form-transition">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit" className="cta-button">Submit</button>
      </form>
      <div id="contactInfo" style={{ display: 'none' }}></div>
    </section>
  );
}

export default ContactNow;
