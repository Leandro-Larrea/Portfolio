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
          form.current.childNodes.forEach(e=>{
            e.value = ""
          })
      }, (error) => {
          console.log(error.text);
      });
      
  };

  return (
    <form ref={form} className="form" onSubmit={sendEmail}>
      
      <input placeholder='Nombre*' className={`input ${theme}`} type="text" name="user_name" id='"user_name"' />
      
      <input placeholder='marcelito' className={`input ${theme}`} type="email" name="user_email" />
      
      <textarea className={`${theme}`} name="message" />
      <button className={`submit ${theme}`} type="submit">Enviar</button>
    </form>
  );
};