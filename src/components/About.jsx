import { useContext } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ThemeContext } from "../context/ThemeContext";
import leandro from "../media/images/leandro.jpeg"
import background from "../media/images/background.png"
import { Filuretes } from "./Filuretes";


export const About = ()=>{

    const { theme, setTheme } = useContext(ThemeContext);
    let a = 1
    return(
        <div className={`about ${theme}`}>
            <div className="about-title">
                    <h1>Sobre</h1> <h1>mi</h1>
             </div>
            <div className={`about-position`}>
                
                <div className={`about-image-container ${theme}`}>
                    <div className={"about-image-position"}>
                    <AnimationOnScroll delay={100} animateIn="animate__zoomIn">
                        <img src={leandro} className={`about-image ${theme}`}></img>
                    </AnimationOnScroll>
                    </div>
                </div>
                <div className="about-background">
                <div className={"about-text-position"}>
                <AnimationOnScroll  delay={100} animateIn="animate__zoomIn">
                            <div className={`text ${theme}`}>
                                Mi nombre es Leandro Larrea, tengo 26 años.
                                Si bien siempre me senti un poco curioso por el mundo de la programación no fue hasta mayo
                                de 2022 que comenze a involucrarme e interesarme de verdad. Poco tiempo me tomo darme cuenta que de verdad me apasionaba el codigo
                                por lo que al poco tiempo inicie el bootcamp de Henry enfocado a desarrollo web full stack, donde
                                encontre lo que buscaba: empaparme de codigo y conocer nuevas tecnologias de forma guiada, y si bien
                                el bootcamp cumplio de maravilla esa parte depende de uno mismo darle forma a todo ese conocimiento 
                                y hacerlo propio por medio de la practica, por eso sigo practicando para mejorar mi codigo 
                                cada día  
                            </div>
                 </AnimationOnScroll>
                        </div>
                    <img src={background}/>
                </div>
                <div className="about-background2">
                    <img src={background}/>
                </div>

            </div>
                
        </div>
    )
}