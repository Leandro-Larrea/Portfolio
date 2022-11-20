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
import pc from  "../media/images/pc2.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";



export const About = ()=>{
    
    const frontIcos = [ico1, ico2, ico7, ico8, ico9]
    const backIcos = [ico6, ico4, ico3, ico5, ico10]
    const icos = frontIcos.concat(backIcos)
   return (
        <div className="about-container" id="about">
            
            <div className="about-card">            
                <AnimationOnScroll animateIn="animate__fadeInRightBig" offset="20">
                    <h1>Skills</h1>
                    <h2>Frontend & Backend</h2>
                    <p>Estas son las herramientas con las que he estado trabajando y que sigo desarrollando cada día para ser un mejor programador.</p>
                </AnimationOnScroll>
            </div>
            
           
            <div className="about-img-container">
                <img src={pc} className="img"></img>
            </div>
            <div className="skills-main">
                <div className="skills-container">
                    {frontIcos?.map(e => <img className="ico" src={e}/>)}
                </div>
                <div className="skills-container">
                    {backIcos?.map(e => <img className="ico" src={e}/>)}
                </div>
                <div className="text-container">
                    <h1></h1>
                </div>
            </div>
        </div>
     )
     
    
}