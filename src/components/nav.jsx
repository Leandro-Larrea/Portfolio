import { useScrollPostion } from "../hooks/useScrollPosition"
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useRef, useState, useMemo } from "react";
import {FaToggleOff} from "react-icons/fa"
import {FaToggleOn} from "react-icons/fa"


export const Nav = (props) =>{
    
    const scrollPosition = useScrollPostion()
    const { theme, setTheme } = useContext(ThemeContext);


    const x = (e)=>{
        setTheme(theme ==="dark"? "light": "dark")
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    
   
 
    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
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
    
    useEffect(()=>{
        console.log("hola")
        if(windowSize > 700 ) setNav(false)
        getIndex()
    },[windowSize])

    useEffect(()=>{
        console.log("hola")
       
        getIndex()
    },[scrollPosition])
    
    const [nav, setNav] = useState(false)
    console.log(props)
    const [currentSlide, setCurrentSlide] = useState(0)

    const getIndex = async ()=>{
      if(props.getCurrentSlideIndex){
            let a = await props.getCurrentSlideIndex()
            console.log("this is the currentSlideIndex", a)
            setCurrentSlide(a)}
           
    }
    
    

    return(
        <nav className={scrollPosition < 500? "nav animationOff": `scroll ${theme}`} >
            <div className={"nav-container"}>
             <div className="hamburger" onClick={()=> {nav? setNav(false): setNav(true); console.log(nav)}}>
                <div>
                    <div className={`line ${theme}`}></div>
                    <div className={`line ${theme}`}></div>
                    <div className={`line ${theme}`}></div>
                </div>
            </div>
             
            <button 
                className={theme} 
                style={theme === "dark"?{cursor:"pointer", background: "transparent", border:"none",}:{display:"none"}}
                onClick={x}>
                <FaToggleOff color={theme} size={"24px"}/>
            </button>
           
            <button 
            className={theme} 
            style={theme === "light"?{cursor:"pointer", background: "transparent", border:"none",}:{display:"none"}}
                onClick={x}>
                <FaToggleOn color={theme} size={"24px"}/>
            </button>
                <a href="#contact" className={currentSlide === 4?`focus`: scrollPosition < 500?"navADefault":theme}>Contacto</a>
                <a href="#projects" className={currentSlide === 3?`focus`: scrollPosition < 500?"navADefault":theme}>Proyectos</a>
                <a href="#skills" className={currentSlide === 2?`focus`: scrollPosition < 500?"navADefault":theme}>Tecnologias</a>
                <a href="#about" className={currentSlide === 1?`focus`: scrollPosition < 500?"navADefault":theme}>Sobre Mi</a>
                <a href="#home" className={currentSlide === 0?`focus`: scrollPosition < 500?"navADefault":theme}>Inicio</a>
                <div className="ico-container">
                    <p className={`logo ${theme}`}>L L</p>
                </div>
            </div>
                <div className={nav? scrollPosition > 500?`navResponsiveOn ${theme}`: "navResponsiveOn": "navResponsiveOff"}>
                    <a href="#contact" className={currentSlide === 4?`focus`:theme}>Contacto</a>
                    <a href="#projects" className={currentSlide === 3?`focus`:theme}>Proyectos</a>
                    <a href="#skills" className={currentSlide === 2?`focus`:theme}>Tecnologias</a>
                    <a href="#about" className={currentSlide === 1?`focus`:theme}>Sobre Mi</a>
                    <a href="#home" className={currentSlide === 0?`focus`:theme}>Inicio</a>
                
            </div>   
        </nav>
    )
}


