import videogames from "../media/images/videogames.png";
import pokemons from "../media/images/pokemons.png";
import eddie from "../media/images/eddie.png";
import eddieMobile from "../media/images/eddieMobile.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import github from "../media/images/programing-icos/github.png"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import pcScreen from "../media/images/pcScreen.png";
import phoneScreenCut from "../media/images/phoneScreenCut.png"
import videoGamesMobile from "../media/images/videoGamesMobile.png"
import modernDesignMobile from "../media/images/modernDesignMobile.png"
import modernDesign from "../media/images/modernDesign.png"
import TommyEmmanuel from "../media/images/TommyEmmanuel.png"
import TommyEmmanuelMobile from "../media/images/TommyEmmanuelMobile.png"
import { useScrollPostion } from "../hooks/useScrollPosition";



export const Projects = ()=>{
    const { theme, setTheme } = useContext(ThemeContext);

    let a =[
        {link:"https://github.com/Leandro-Larrea/videoGames",
        demo: "https://leangames.vercel.app/",
        description:"Un proyecto individual usando la api de videogames RAWG en el que integre las tecnologias que aprendi en el curso de HENRY, muestra diferentes juegos de la api, los cuales podemos filtrar y ordenar de diferentes formas, ademas permite al usuario postear editar y eliminar su propio videojuego",
        img:videogames,
        imgR:videoGamesMobile},
        {link:"https://github.com/Leandro-Larrea/Pokemon",
        demo: "https://pokemon-eight-plum.vercel.app/",
        description:"Un proyecto hecho con la PokeApi, permite al usuario buscar entre los diferentes pokemones asi como crear un pokemon personalizado",
        img:pokemons,
        imgR:pokemons},
        {link:"https://github.com/Leandro-Larrea/Edie-home-page",
        description:"Eddie homepage es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en una imagen, tanto en su version desktop como mobile.",
        img:eddie,
        imgR:eddieMobile,
        demo:"https://airy-luck-feta.glitch.me/#"},
        {link:"https://github.com/Leandro-Larrea/Edie-home-page",
         description:"Modern interior design es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en una imagen, tanto en su version desktop como mobile.",
        img:modernDesign,
        imgR:modernDesignMobile,
        demo:"https://airy-luck-feta.glitch.me/#"},
        {link:"https://octagonal-glorious-kitten.glitch.me/",
         description:"La pagina de tributo fue mi primer proyecto, la primera vez que junte lo que aprendi en html y css e hice algo propio.",
        img:TommyEmmanuel,
        imgR:TommyEmmanuelMobile,
        demo:"https://octagonal-glorious-kitten.glitch.me/"},
        ]

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

        const [currentPage, setCurrentPage] = useState(1)

        const changePage = (e)=>{
            e.preventDefault
            console.log(e)
            setCurrentPage(e)
        }
        let projectsPerPage = (Math.floor(windowSize/500))
        let pagesPerWidth = (windowSize < 1000?
                a.length: a.length % 2 === 0?
                    a.length/Math.ceil(Math.ceil((windowSize/500))):
                    Math.ceil(a.length+2)/Math.ceil(Math.ceil((windowSize/500)))
            )
    
    useEffect(()=>{
        console.log(pagesPerWidth)
        if( currentPage > pagesPerWidth) setCurrentPage(pagesPerWidth)
    },[pagesPerWidth])

    const lastproject = currentPage * projectsPerPage;
    const firstproject = lastproject - projectsPerPage
    const renderprojects = a.slice(firstproject, lastproject)
    const fcUpdate = (x)=>{
      setCurrentPage(x)
    }
   
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
            <div className="pages">
                {a?.map((b, i) => {if(i < pagesPerWidth){   
                    {console.log(pagesPerWidth)}            
                    return (
                   
                        <AnimationOnScroll duration={.5} delay={i * 200} animateIn="animate__zoomIn">
                            <button className={`${theme}`} onClick={()=>changePage(i+1)}>{i + 1}</button>
                        </AnimationOnScroll>
           
                        )
                    }}
                )}
            </div>
            <div className={`projects-container ${theme}`}>
                {renderprojects?.map((a, i) =>{
                    return <AnimationOnScroll duration={.5} animateIn="animate__zoomIn">
                         <div className={`projects-card ${theme}`} key={a.link} >
                            <div className="projects-img-container" >
                                <img className="projects-desktop-screen" src={pcScreen}></img>
                                <img className="projects-img" src={a.img}></img>
                                <div className="projects-mobile">
                                    <div className="projects-mobile-position">
                                        <img className="projects-mobile-screen" src={phoneScreenCut}></img>
                                        <img className="projects-mobile-img" src={a.imgR}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-description">
                                <p className={`${theme}`}>{a.description}</p>
                            </div>
                            <div className="buttons-container" key={a.link} >
                                <a key={a.link} className={`button1 ${theme}`}  href={a.demo?a.demo:a.link } target="_blank">Project</a>
                                <a className={`button2 ${theme}`} href={a.link} target="_blank"><img src={github}/>
                                <p className={`buttons-code`}>{"<"}</p>
                                <p className={`buttons-code`}>{"Code"}</p>
                                <p className={`buttons-code`}>{"/>"}</p>
                                </a>
                            </div>
                        </div>
                </AnimationOnScroll>
                }
                )}
            </div>
        </div>
    )
}