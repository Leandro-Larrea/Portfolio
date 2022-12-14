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
import pc from  "../media/images/pc2.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const Skills = ()=>{
    const { theme, setTheme } = useContext(ThemeContext);
    
    const frontIcos = [ico1, ico2, ico7, ico8, ico9, ico12]
    const backIcos = [ico6, ico4, ico3, ico5, ico10,ico11]
    const icos = frontIcos.concat(backIcos)
   return (
        <div className={`tecnologias-container ${theme}`} id="skills" >
            <div className={`tecnologias-left ${theme}`}>
                <div className="skills-img-container">
                    <img src={pc} className="img"></img>
                </div>
            </div>
            <div className={`tecnologias-right ${theme}`} >
            <div className={`skills-card ${theme}`}>   
                <div className="skills-position">      
                    <AnimationOnScroll className={`skills-text ${theme}`} duration={.2} animateIn="customLeftRight">
                        <h1 className="light">Tecnologias</h1>
                        <h2>Frontend</h2>
                        <h2> & </h2>
                        <h2>Backend</h2>
                        <p>Estas son las herramientas con las que he estado trabajando y que sigo desarrollando cada d??a para ser un mejor programador.</p>
                    </AnimationOnScroll>
                </div>
            </div>
                <div className="skills-main">
                    <div className="skills-container">
                        {frontIcos?.map((e,i) => 
                        <div className="ico-div" key={i}>
                            <AnimationOnScroll  duration={Math.random()+.5} offset={10}   animateIn="animate__zoomIn">
                                <img  className="ico" src={e}/>
                            </AnimationOnScroll>
                        </div>)}
                    </div>
                    <div className="skills-container">
                        {backIcos?.map((e,i) => 
                        <div className="ico-div" key={i}>
                            <AnimationOnScroll  duration={Math.random()+.5} offset={10} animateIn="animate__zoomIn">
                                <img  className="ico" src={e}/>
                            </AnimationOnScroll>
                        </div>)}
                    </div>        
                </div>
            </div>
        </div>
     )
     
    
}