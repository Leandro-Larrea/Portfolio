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
           <AnimationOnScroll  duration={.5} animateIn="animate__fadeInRightBig">
            <div className="h1-containers">
                <h1>Enviame</h1><h1> un</h1><h1> mensaje</h1>
           </div>
            </AnimationOnScroll> 
    
      
                <div className="mail-container">
                   
                    <ContactUs></ContactUs>
                </div>
       
                <div className="contact-container">
                    <AnimationOnScroll duration={.5} offset={10} animateIn="animate__zoomIn">
                        <a className={`button2 ${theme}`} href={"https://github.com/Leandro-Larrea"} target="_blank">
                            <img src={github}/>
                            GitHub
                        </a>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={.5} offset={10} delay={300} animateIn="animate__zoomIn">
                        <a className={`button2 ${theme}`} href="https://api.whatsapp.com/send?phone=542314440302" target="_blank" rel="noopener noreferrer" >
                            <img src={whatsapp}/>
                            WhatsApp
                        </a>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={.5} offset={10} delay={600} animateIn="animate__zoomIn">
                        <a className={`button2 ${theme}`} href={"https://www.linkedin.com/in/leandro-gustavo-larrea-11bb90249/"}target="_blank">
                            <img src={linkedin}/>
                            linkedin
                        </a>
                    </AnimationOnScroll>
                </div>

            
            
        </div>
    )
}