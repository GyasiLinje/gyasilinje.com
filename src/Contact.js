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
  return (

    <div className='contact-container'>
      <div className='left'>

      </div>
      <div className='right'>
 
        <form className='formContainer' onSubmit={onSubmit}>
        <a className='home-link' href='/'>Contact Me</a>
          <input placeholder='first name' className='form-input' type="text" name="firstName" />
          <input placeholder='last name' className='form-input' type="text" name="lastName" />
          <input placeholder='email' className='form-input' type="text" name="email" />
          <button className='submitBtn' value="submit"> Submit </button>
        </form>
      </div>
    </div>


  );
}

export default Contact;
