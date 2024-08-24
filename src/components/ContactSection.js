import React from 'react';
import './ContactSection.css'; // Import custom CSS for ContactSection

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactSection;
