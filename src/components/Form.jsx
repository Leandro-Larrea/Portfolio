import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context/ThemeContext';
import letter from "../media/images/letter.png"

const { VITE_PUBLIC_KEY, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta.env

export const ContactUs = () => {
    const { theme, setTheme } = useContext(ThemeContext);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} className="form" onSubmit={sendEmail}>
      <label className="label" htmlFor='user_name'>Name</label>
      <img className="form-img" src={letter}></img>
      <input className={`input ${theme}`} type="text" name="user_name" id='"user_name"' />
      <label className="label" htmlFor='user_email'>Email</label>
      <input className={`input ${theme}`} type="email" name="user_email" />
      <label className="label" htmlFor='message'>Message</label>
      <textarea className={`${theme}`} name="message" />
      <input className={`submit ${theme}`}  type="submit" value="Send" />
    </form>
  );
};