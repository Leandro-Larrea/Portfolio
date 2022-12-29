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

    const [change, setChange] = useState(0)

    const a = async ()=>{
       await setChange(change +1)
    }

    const refHome = useRef(null)
    const refAbout = useRef(null)
    const refSkills = useRef(null)
    const refProjects = useRef(null)
    const refContact = useRef(null)

    
    
    const isInViewportAbout = useIsInViewport(refAbout);
    console.log('isInViewportAbout: ', isInViewportAbout);

    const isInViewportSkills = useIsInViewport(refSkills);
    console.log('isInViewportSkills: ', isInViewportSkills);

    return(
        <div className={`main ${theme}`}>
            <header className="header" id="home" >
                <Nav change={change} setChange={setChange} refAbout={isInViewportAbout}/>
                <div className="container">
                <div className="card">
                <AnimationOnScroll  animateIn="animate__fadeInLeftBig"><h2>Que tal!</h2><h3> soy</h3></AnimationOnScroll>
                <AnimationOnScroll  animateIn="animate__zoomIn"><h1>Leandro Larrea</h1></AnimationOnScroll>
                 <AnimationOnScroll  animateIn="animate__fadeInRightBig"><h3>Bienvenidos</h3> <h2>a mi portfolio</h2></AnimationOnScroll>
                </div>
                </div>
            </header>
            <FullPage beforeChange={()=> a()} controls={Nav}>
                
                <Slide>
                    <div ref={refAbout}>    
                        <About></About>
                    </div>    
                </Slide>
                
                <Slide>
                    <div ref={refSkills}>    
                        <Skills></Skills> 
                    </div>    
                </Slide>
                
                <Slide>
                    <div ref={refProjects}>    
                        <Projects></Projects>
                    </div>    
                </Slide>
                
                <Slide>
                    <div ref={refContact}>    
                        <Footer></Footer>
                    </div>    
                </Slide>
            </FullPage>
        </div>
    )
}

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);
  
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );
  
    useEffect(() => {
      observer.observe(ref.current);
  
      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);
  
    return isIntersecting;
  }
