import { Skills } from "./Skills"
import { Footer } from "./Footer"
import { Nav } from "./nav"
import { Projects } from "./Projects"
import { About } from "./About"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { useContext, useMemo, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useEffect } from "react"
import { FullPage, Slide } from 'react-full-page';

export const Home = (props) =>{
    
    const { theme, setTheme } = useContext(ThemeContext);

    const [windowWidth, setWindowWidth] = useState(getWindowSize());
    
    useEffect(() => {
        function handleWindowResize() {
          setWindowWidth(getWindowSize());
        }
        
        window.addEventListener('resize', handleWindowResize);
        
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    
      function getWindowSize() {
        const innerWidth = window.innerWidth;
        return innerWidth
      }

      if(windowWidth <= 700){
        return  <div className={`main ${theme}`}>
                    <header className="header" id="home" >
                        <Nav/>
                        <div className="container">
                            <div className="card">
                                <AnimationOnScroll  animateIn="animate__fadeInLeftBig"><h2>Que tal!</h2><h3> soy</h3></AnimationOnScroll>
                                <AnimationOnScroll  animateIn="animate__zoomIn"><h1>Leandro Larrea</h1></AnimationOnScroll>
                                <AnimationOnScroll  animateIn="animate__fadeInRightBig"><h3>Desarrollador</h3> <h2>Full-Stack</h2></AnimationOnScroll>
                            </div>
                        </div>
                    </header>
                    <About></About>                 
                    <Skills></Skills>                 
                    <Projects></Projects>                
                 <Footer></Footer>         
                </div>
                }
            else{
               
    return(
        <div className={`main ${theme}`}>
            <FullPage controls={Nav} duration={100} scrollMode={windowWidth > 700? "full-page": "normal"}>
                <Slide>
                    <header className="header" id="home" >
                        <Nav/>
                        <div className="container">
                        <div className="card">
                        <AnimationOnScroll  animateIn="animate__fadeInLeftBig"><h2>{`< `}</h2> <h2>{` Que tal!`}</h2><h3> soy</h3></AnimationOnScroll>
                        <AnimationOnScroll  animateIn="animate__zoomIn"><h1> Leandro Larrea</h1></AnimationOnScroll>
                        <AnimationOnScroll  animateIn="animate__fadeInRightBig"><h3>Desarrollador </h3> <h2>Full-Stack </h2> <h2>{`/>`}</h2></AnimationOnScroll>
                        </div>
                        </div>
                    </header>
                </Slide>
                
                <Slide>   
                    <About></About>    
                </Slide>
                
                <Slide>   
                    <Skills></Skills>     
                </Slide>
                
                <Slide>   
                    <Projects></Projects>    
                </Slide>
                
                <Slide>   
                    <Footer></Footer>    
                </Slide>
            </FullPage>
        </div>
    )}
}


