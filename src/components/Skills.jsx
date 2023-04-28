import { useEffect } from "react";
//  const modules = import.meta.glob("../media/images/programing-icos/*.png")

//     const links = [];

//    for(const path in modules){
//          modules[path]().then((mod)=>{
//              links.push(mod.default)
//              console.log(mod.default)
//          })}
import ico1 from "../media/images/programing-icos/css.png";
import ico2 from "../media/images/programing-icos/html.png";
import ico3 from "../media/images/programing-icos/js.png";
import ico4 from "../media/images/programing-icos/mongo.png";
import ico5 from "../media/images/programing-icos/node.png";
import ico6 from "../media/images/programing-icos/postgresql.png";
import ico7 from "../media/images/programing-icos/react.png";
import ico8 from "../media/images/programing-icos/redux.png";
import ico9 from "../media/images/programing-icos/sass.png";
import ico10 from "../media/images/programing-icos/express.png";
import ico11 from "../media/images/git.png";
import ico12 from "../media/images/programing-icos/github.png";
import pc from "../media/images/pc2.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const Skills = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const frontIcos = [
    { img: ico1, name: "CSS" },
    { img: ico2, name: "HTML" },
    { img: ico7, name: "React" },
    { img: ico8, name: "Redux" },
    { img: ico9, name: "SCSS" },
    { img: ico12, name: "GitHub" },
  ];
  const backIcos = [
    { img: ico6, name: "PostgreSQL" },
    { img: ico4, name: "MongoDB" },
    { img: ico3, name: "JavaScript" },
    { img: ico5, name: "NodeJS" },
    { img: ico10, name: "Express" },
    { img: ico11, name: "Git" },
  ];
  const icos = frontIcos.concat(backIcos);
  return (
    <div className={`tecnologias-container ${theme}`} id="skills">
      <div className={`tecnologias-left ${theme}`}>
        <div className="skills-img-container">
          <img src={pc} className="img"></img>
        </div>
      </div>
      <div className={`tecnologias-right ${theme}`}>
        <div className={`skills-card ${theme}`}>
          <div className="skills-position">
            <AnimationOnScroll
              className={`skills-text ${theme}`}
              duration={0.2}
              animateIn="customLeftRight"
            >
              <h1 className="light">Tecnologias</h1>
              <h2>Frontend</h2>
              <h2> & </h2>
              <h2>Backend</h2>
              <p>
                Estas son las herramientas que utilizo y sigo perfeccionando
                cada día para fortalecer mi perfil como programador.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="skills-main">
          <div className="skills-container">
            {frontIcos?.map((e, i) => (
              <div className="ico-div" key={i}>
                <AnimationOnScroll
                  duration={Math.random() + 0.5}
                  offset={10}
                  animateIn="animate__zoomIn"
                  data-tooltip-id={"i"}
                  data-tooltip-content="Hello world!"
                >
                  <img
                    className="ico"
                    src={e.img}
                    data-tooltip-id={"i"}
                    data-tooltip-content={e.name}
                  />
                  <Tooltip place="bottom" id={"i"}>
                    asdasd
                  </Tooltip>
                </AnimationOnScroll>
              </div>
            ))}
          </div>
          <div className="skills-container">
            {backIcos?.map((e, i) => (
              <div className="ico-div" key={i}>
                <AnimationOnScroll
                  duration={Math.random() + 0.5}
                  offset={10}
                  animateIn="animate__zoomIn"
                >
                  <img
                    className="ico"
                    src={e.img}
                    data-tooltip-id={"i"}
                    data-tooltip-content={e.name}
                  />
                  <Tooltip place="bottom" id={"i"}>
                    asdasd
                  </Tooltip>
                </AnimationOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
