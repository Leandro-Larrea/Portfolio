import { useContext } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { ThemeContext } from "../context/ThemeContext";
import leandro from "../media/images/leandro.jpeg";
import background from "../media/images/background.png";
import { Filuretes } from "./Filuretes";

export const About = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  let a = 1;
  return (
    <div className={`about ${theme}`} id="about">
      <div className="about-title">
        <h1>Sobre</h1> <h1>mi</h1>
      </div>
      <div className={`about-position`}>
        <div className={`about-image-container ${theme}`}>
          <div className={"about-image-position"}>
            <AnimationOnScroll
              delay={100}
              animateIn="animate__zoomIn"
              animateOnce={true}
            >
              <img src={leandro} className={`about-image ${theme}`}></img>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="about-background">
          <div className="about-relleno"></div>
          <div className="about-relleno2"></div>
          <div className="about-relleno"></div>
          <div className={"about-text-position"}>
            <AnimationOnScroll
              delay={100}
              animateIn="animate__zoomIn"
              animateOnce={true}
            >
              <div className={`text ${theme}`}>
                Soy Leandro Larrea, un apasionado de la programación con 26 años
                de edad. Disfruto enormemente generando soluciones a través del
                código, enfrentando desafíos y superando obstáculos en cada
                proyecto en el que me involucro. Mi sed de conocimiento es
                insaciable y siempre estoy en búsqueda de aprender algo nuevo en
                este emocionante proceso de desarrollo.
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="about-background2"></div>
      </div>
    </div>
  );
};
