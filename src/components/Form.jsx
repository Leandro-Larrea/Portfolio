import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context/ThemeContext";
import letter from "../media/images/letter.png";
import { useState } from "react";
import { useEffect } from "react";

const { VITE_PUBLIC_KEY, VITE_TEMPLATE_ID, VITE_SERVICE_ID } = import.meta.env;

export const ContactUs = () => {
  const [loader, setLoader] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const initialForm = {
    name: "",
    email: "",
    message: "",
  };
  const [formObj, setFormObj] = useState(initialForm);

  const [troll, setTroll] = useState(true);
  // let troll = true

  const [trollClass, setTrollClass] = useState("standard");

  const toyPpl = () => {
    trollClass === "standar" || trollClass === "left"
      ? setTrollClass("right")
      : setTrollClass("left");
  };

  useEffect(() => {
    if (formObj.name && formObj.email && formObj.message) {
      setTroll(false);
      setTrollClass("standard");
    } else {
      setTroll(true);
    }
  }, [formObj]);

  const handleInput = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
    emailjs
      .sendForm(
        VITE_SERVICE_ID,
        VITE_TEMPLATE_ID,
        formRef.current,
        VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setFormObj(initialForm);
          setLoader(false);
        },
        (error) => {
          setLoader(false);
        }
      );
  };

  return (
    <form ref={formRef} className="form" onSubmit={sendEmail}>
      <input
        placeholder="Nombre*"
        className={`input ${theme}`}
        type="text"
        value={formObj.name}
        onChange={handleInput}
        name="name"
      />

      <input
        placeholder="Email"
        className={`input ${theme}`}
        type="email"
        value={formObj.email}
        onChange={handleInput}
        name="email"
      />

      <textarea
        className={`${theme}`}
        name="message"
        value={formObj.message}
        onChange={handleInput}
      />
      {!loader ? (
        <button
          onMouseOver={troll ? toyPpl : null}
          className={`${trollClass} ${theme}`}
          type="submit"
        >
          Enviar
        </button>
      ) : (
        <button className="buttonLoading"></button>
      )}
    </form>
  );
};
