import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context/ThemeContext';
import letter from "../media/images/letter.png"
import { useState } from 'react';
import { useEffect } from 'react';

const { VITE_PUBLIC_KEY, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta.env

export const ContactUs = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const initialForm = {
      user_name:"",
      user_email:"",
      message:"",
      }
    const [formObj, setFormObj] = useState(initialForm)

    const [troll, setTroll] = useState(true)
    // let troll = true

    const [trollClass, setTrollClass] = useState("standard")

    const toyPpl = ()=>{
      trollClass === "standar" || trollClass === "left"? setTrollClass("right"): setTrollClass("left")
    }


    useEffect(()=>{
       if(formObj.user_name && formObj.user_email && formObj.message) {
        setTroll(false)
        setTrollClass("standard")
      }
      else{
        setTroll(true)
      }
    },[formObj])

    const handleInput = (e)=>{
      setFormObj({...formObj,[e.target.name]:e.target.value})
    }

    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form.current, VITE_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            // form.current.childNodes.forEach(e=>{
            // e.value = ""
            // })
            setFormObj(initialForm)
        }, (error) => {
          console.log(error.text);
        });
      
    };

  return (
    <form ref={form} className="form" onSubmit={sendEmail}>
      
      <input placeholder='Nombre*' className={`input ${theme}`} type="text" value={formObj.user_name} onChange={handleInput} name="user_name" id='"user_name"' />
      
      <input placeholder='Email' className={`input ${theme}`} type="email" value={formObj.user_email} onChange={handleInput} name="user_email" />
      
      <textarea className={`${theme}`} name="message" value={formObj.message} onChange={handleInput} />
      <button  onMouseOver={troll?toyPpl:null}
        className={`${trollClass} ${theme}`} type="submit">Enviar
      </button>
    </form>
  );
};