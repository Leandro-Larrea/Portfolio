import videogames from "../media/images/videogames.png";
import pokemons from "../media/images/pokemons.png";
import eddie from "../media/images/eddie.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import github from "../media/images/programing-icos/github.png"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export const Projects = ()=>{
    const { theme, setTheme } = useContext(ThemeContext);

    let a =[
        {link:"https://github.com/Leandro-Larrea/videoGames",
        demo: "https://leangames.vercel.app/",
        description:"Un proyecto individual usando la api de videogames RAWG en el que integre las tecnologias que aprendi en el curso de HENRY, muestra diferentes juegos de la api, los cuales podemos filtrar y ordenar de diferentes formas, ademas permite al usuario postear editar y eliminar su propio videojuego",
        img:videogames},
        {link:"https://github.com/Leandro-Larrea/Pokemon",
        demo: "https://pokemon-eight-plum.vercel.app/",
        description:"Un proyecto hecho con la PokeApi, permite al usuario buscar entre los diferentes pokemones asi como crear un pokemon personalizado",
        img:pokemons},
         {link:"https://github.com/Leandro-Larrea/Edie-home-page",
         description:"Eddie homepage es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en una imagen, tanto en su version desktop como mobile.",
        img:eddie,
        demo:"https://airy-luck-feta.glitch.me/#"}
        ]

    return(    
        <div className={`projects ${theme}`} id="projects">
            <div className="projects-titles-container">
                <AnimationOnScroll duration={.5} animateIn="animate__fadeInLeftBig">
                    <div className="titles">
                        <h1>Mis</h1> <h1>proyectos</h1>
                        <h2></h2>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className={`projects-container ${theme}`}>
                {a?.map(a=>
                     <AnimationOnScroll duration={.5} animateIn="animate__zoomIn">
                         <div className={`projects-card ${theme}`} key={a.link} >
                    <div className="projects-img-container" >
                    <img className="projects-img" src={a.img}></img>
                    </div>
                    <div className="projects-description">
                        <p>{a.description}</p>
                    </div>
                    <div className="buttons-container" key={a.link} >
                        <a key={a.link} className={`button1 ${theme}`}  href={a.demo?a.demo:a.link } target="_blank">Project</a>
                        <a className={`button2 ${theme}`} href={a.link} target="_blank"><img src={github}/>Code</a>
                    </div>
                </div>
                </AnimationOnScroll>
                )}
            </div>
        </div>
    )
}