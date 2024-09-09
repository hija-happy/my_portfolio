import ContactIllustration from '../assets/icons/contact.svg';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [state, handleSubmit] = useForm('xdknbroo');
  const [loading, setLoading] = useState(false); // Loading state

  const handleFormSubmit = async (event) => {
    setLoading(true);
    await handleSubmit(event);
    setLoading(false);
  };

  if (state.succeeded) {
    return (
      <section className='contact-page'>
      <section id='contact' className='contact-section'>
        <h2>Contact</h2>

        <div className="contact-content">        <p className='status-message'>Message sent successfully!</p>
        <button onClick={() => window.location.reload()} className='reload-button'>
          Send Another Message
        </button>
        <div className="contact-illustration">
              <img src={ContactIllustration} alt="Contact illustration" />
            </div>
            </div>

      </section>
      </section>
    );
  }

  return (
    <section className='contact-page'>
    <section id='contact' className='contact-section'>
      <h2>Contact</h2>
      <div className="contact-content">
      <form onSubmit={handleFormSubmit} method='POST'>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          required 
        />

        <label htmlFor='email'>Email:</label>
        <input 
          type='email' 
          id='email' 
          name='email' 
          required 
        />
        <ValidationError 
          prefix='Email' 
          field='email'
          errors={state.errors}
        />

        <label htmlFor='message'>Message:</label>
        <textarea 
          id='message' 
          name='message' 
          required 
        />
        <ValidationError 
          prefix='Message' 
          field='message'
          errors={state.errors}
        />

        <button type='submit' disabled={state.submitting || loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      <div className="contact-illustration">
              <img src={ContactIllustration} alt="Contact illustration" />
            </div>
            </div>

      {loading && <p className='loading-message'>Sending your message, please wait...</p>}
    </section>
    </section>
  );
};

export default ContactSection;
