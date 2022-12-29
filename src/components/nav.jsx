import { useScrollPostion } from "../hooks/useScrollPosition"
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useRef, useState, useMemo } from "react";
import {FaToggleOff} from "react-icons/fa"
import {FaToggleOn} from "react-icons/fa"


export const Nav = (props) =>{
    
    const scrollPosition = useScrollPostion()
    const { theme, setTheme } = useContext(ThemeContext);
    const [aboutR, setAboutR] = useState(false)

    const x = (e)=>{
        setTheme(theme ==="dark"? "light": "dark")
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const slides = async (e)=>{
        // console.log(slideFocused)
        // props.scrollToSlide(e)
       let currentSlide = await props.getCurrentSlideIndex()
       console.log(currentSlide)
    }
    
    useEffect( ()=>{
       slides(1)
     },[props.change]) 
 
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
        if(windowSize > 700) setNav(false)
    },[windowSize])
    
    const [nav, setNav] = useState(false)

    useEffect(()=>{
        setAboutR(props.refAbout)
    },[props.refAbout])

    useEffect(()=>{
        console.log(aboutR)
    },[aboutR])

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
                <a href="#contact" className={`${theme}`} onClick={()=> slides(4)}>Contacto</a>
                <a href="#projects" className={`${theme}`} onClick={()=> slides(3)}>Proyectos</a>
                <a href="#skills" className={`${theme}`} onClick={()=> slides(2)}>Tecnologias</a>
                <a href="#about" className={props.refAbout?`focus ${theme}`:theme} onClick={()=> slides(1)}>Sobre Mi</a>
                <a href="#home" className={`${theme}`} onClick={()=> slides(0)}>Inicio</a>
                <div className="ico-container">
                    <p className={`logo ${theme}`}>L L</p>
                </div>
            </div>
                <div className={nav? scrollPosition > 500?`navResponsiveOn ${theme}`: "navResponsiveOn": "navResponsiveOff"}>
                    <a href="#contact" className={`${theme}`}>Contacto</a>
                    <a href="#projects" className={`${theme}`}>Proyectos</a>
                    <a href="#skills" className={`${theme}`}>Tecnologias</a>
                    <a href="#about" className={props.refAbout?`focus ${theme}`:theme}>Sobre Mi</a>
                    <a href="#home" className={`${theme}`}>Inicio</a>
                
            </div>   
        </nav>
    )
}


