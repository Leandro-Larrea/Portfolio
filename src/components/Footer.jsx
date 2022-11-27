import github from "../media/images/programing-icos/github.png"
import linkedin from "../media/images/programing-icos/linkedin.png"
import whatsapp from "../media/images/programing-icos/whatsapp.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Footer = () =>{
    return(
        <div className="footer" id="contact">
            <AnimationOnScroll  duration={.5} animateIn="animate__fadeInLeftBig">
            <div className="contact-container">
                <a className="button2" target="blank">
                    <img src={github}/>
                    GitHub
                </a>
            <a className="button2" target="blank">
                <img src={whatsapp}/>
                whatsapp
            </a>
            <a className="button2" target="blank">
                <img src={linkedin}/>
                linkedin
            </a>
            </div>
            </AnimationOnScroll>
            <div className="mail-container"></div>
        </div>
    )
}