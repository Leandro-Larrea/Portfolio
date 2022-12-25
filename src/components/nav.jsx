import { useScrollPostion } from "../hooks/useScrollPosition"
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import {FaToggleOff} from "react-icons/fa"
import {FaToggleOn} from "react-icons/fa"


export const Nav = () =>{
    
    const scrollPosition = useScrollPostion()
    const { theme, setTheme } = useContext(ThemeContext);

    const x = (e)=>{
        setTheme(theme ==="dark"? "light": "dark")
    }
    

    return(
        <nav className={scrollPosition < 500? "nav animationOff": `scroll ${theme}`} >
            <div className="ico-container">
                <p className={`logo ${theme}`}>L L</p>
            </div>
            <div className={"nav-container"}>
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
                <a href="#contact" className={`${theme}`}>Contacto</a>
                <a href="#projects" className={`${theme}`}>Proyectos</a>
                <a href="#skills" className={`${theme}`}>Tecnologias</a>
                <a href="#about" className={`${theme}`}>Sobre Mi</a>
                <a href="#home" className={`${theme}`}>Inicio</a>
            </div>
        </nav>
    )
}