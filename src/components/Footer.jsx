import github from "../media/images/programing-icos/github.png";
import linkedin from "../media/images/programing-icos/linkedin.png";
import whatsapp from "../media/images/programing-icos/whatsapp.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import emailjs from "@emailjs/browser";
import { ContactUs } from "./Form";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`footer ${theme}`} id="contact">
      <AnimationOnScroll
        duration={0.5}
        animateIn="animate__fadeInRightBig"
        animateOnce={true}
      >
        <div className="h1-containers">
          <h1>Contactame</h1>
        </div>
      </AnimationOnScroll>

      <div className="mail-container">
        <ContactUs></ContactUs>
      </div>

      <div className="contact-container">
        <AnimationOnScroll
          duration={0.5}
          offset={10}
          animateIn="animate__zoomIn"
          animateOnce={true}
        >
          <a
            className={`button2 ${theme}`}
            href={"https://github.com/Leandro-Larrea"}
            target="_blank"
          >
            <div className="footer-icon">
              <FaGithub />
            </div>
          </a>
          <a
            className={`footer-a-text ${theme}`}
            href={"https://github.com/Leandro-Larrea"}
            target="_blank"
          >
            GitHub
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={0.5}
          offset={10}
          delay={300}
          animateIn="animate__zoomIn"
          animateOnce={true}
        >
          <a
            className={`button2 ${theme}`}
            href="https://api.whatsapp.com/send?phone=542314440302"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="footer-icon">
              <FaWhatsapp />
            </div>
          </a>
          <a
            className={`footer-a-text ${theme}`}
            href="https://api.whatsapp.com/send?phone=542314440302"
            target="_blank"
            rel="noopener noreferrer"
          >
            What's App
          </a>
        </AnimationOnScroll>
        <AnimationOnScroll
          duration={0.5}
          offset={10}
          delay={600}
          animateIn="animate__zoomIn"
          animateOnce={true}
        >
          <a
            className={`button2 ${theme}`}
            href={"https://www.linkedin.com/in/leandro-larrea-11bb90249/"}
            target="_blank"
          >
            <div className="footer-icon">
              <FaLinkedin />
            </div>
          </a>
          <a
            className={`footer-a-text ${theme}`}
            href={"https://www.linkedin.com/in/leandro-larrea-11bb90249/"}
            target="_blank"
          >
            Linkedin
          </a>
        </AnimationOnScroll>
      </div>
    </div>
  );
};
