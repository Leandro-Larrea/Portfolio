import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export const About = ()=>{

    const { theme, setTheme } = useContext(ThemeContext);

    return(
        <div className={`about ${theme}`} id="about">
            <div className={`about-text-container ${theme}`}>
                <h1>Sobre mi</h1>
                <p>
                    Mi nombre es Leandro Larrea, tengo 26 años, trabaje como tractorista durante 8 años
                        si bien siempre me senti un poco curioso por el mundo de la programación no fue hasta mayo
                        de 2022 que comenze a involucrarme e interesarme de verdad, comenze viendo tutoriales y leyendo 
                        eloquent javascript. Poco tiempo me tomo darme cuenta que de verdad me apasionaba el codigo
                        por lo que al poco tiempo inicie el bootcamp de Henry enfocado a desarrollo web full stack, donde
                        encontre lo que buscaba; empaparme de codigo y conocer nuevas tecnologias de forma guiada, y si bien
                        el bootcamp cumplio de maravilla esa parte depende de uno mismo darle forma a todo ese conocimiento 
                        y hacerlo propio por medio de la practica, por eso sigo y seguire practicando para mejorar mi codigo 
                        cada día  
                </p>
            </div>
            <div className={`about-image-container ${theme}`}>
                <div className={`about-image ${theme}`}>
                   
                </div>
            </div>
        </div>
    )
}