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
            <AnimationOnScroll delay={100} animateIn="animate__zoomIn">
              <img src={leandro} className={`about-image ${theme}`}></img>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="about-background">
          <div className={"about-text-position"}>
            <AnimationOnScroll delay={100} animateIn="animate__zoomIn">
              <div className={`text ${theme}`}>
                Soy Leandro Larrea, tengo 26 años. Cuando descubrí que la
                programación realmente me apasionaba hice el bootcamp de Henry
                enfocado en desarrollo web full stack, donde aprendí y
                experimenté con nuevas tecnologías guiado por expertos. Me
                encanta generar soluciones a través del código y siempre busco
                aprender algo nuevo en el proceso. Ahora sigo realizando
                diferentes proyectos para perfeccionar mi código y seguir
                creciendo como programador.
              </div>
            </AnimationOnScroll>
          </div>
          <img src={background} />
        </div>
        <div className="about-background2">
          <img src={background} />
        </div>
      </div>
    </div>
  );
};
