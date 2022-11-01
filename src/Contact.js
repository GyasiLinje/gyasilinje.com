import React, { useState } from 'react';
import logo from './logo.svg';
import './Contact.css';
import anime from 'animejs';
import ReactAnime from 'react-animejs'

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function onSubmit(e) {
  e.preventDefault();
}


function Contact() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleNameInput = (e) => {
    e.preventDefault();
    setName(e.target.value)

  }

  const handleEmailInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value)

  }

  const handleMessageInput = (e) => {
    e.preventDefault();
    setMessage(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, message, email)
  }

  return (

    <div className='contact-container'>
      <div className='left'>

      </div>
      <div className='right'>
        <form className='formContainer' onSubmit={handleSubmit}>
          <a className='home-link' href='/'>Contact Me</a>
          <input placeholder='first name' className='form-input' value={name} type="text" name="name" onChange={handleNameInput} />
          <input placeholder='email' className='form-input' value={email} type="text" name="email" onChange={handleEmailInput}/>
          <input placeholder='message' className='form-input' value={message} type="text" name="message" onChange={handleMessageInput} />
          <button className='submitBtn' value="submit"> Submit </button>
        </form>
      </div>
    </div>


  );
}

export default Contact;
