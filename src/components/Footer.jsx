import github from "../media/images/programing-icos/github.png"
import linkedin from "../media/images/programing-icos/linkedin.png"
import whatsapp from "../media/images/programing-icos/whatsapp.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import emailjs from "@emailjs/browser"
import { ContactUs } from "./Form";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



export const Footer = () =>{

    const { theme, setTheme } = useContext(ThemeContext);

    return(
        <div className={`footer ${theme}`} id="contact">
            <AnimationOnScroll  duration={.5} animateIn="animate__fadeInLeftBig">
                <div className="contact-container">
                    <a className={`button2 ${theme}`} target="blank">
                        <img src={github}/>
                        GitHub
                    </a>
                    <a className={`button2 ${theme}`} target="blank">
                        <img src={whatsapp}/>
                        whatsapp
                    </a>
                    <a className={`button2 ${theme}`} target="blank">
                        <img src={linkedin}/>
                        linkedin
                    </a>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll  duration={.5} animateIn="animate__fadeInLeftBig">
                <div className="mail-container">
                   
                    <ContactUs></ContactUs>
                </div>
            </AnimationOnScroll>
            
        </div>
    )
}