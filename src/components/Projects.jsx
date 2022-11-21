import videogames from "../media/images/videogames.png";
import pokemons from "../media/images/pokemons.png";
import eddie from "../media/images/eddie.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Projects = ()=>{

    let a =[
        {description:"Un proyecto individual usando la api de videogames RAWG en el que integre las tecnologias que aprendi en el curso de HENRY, muestra diferentes juegos de la api, los cuales podemos filtrar y ordenar de diferentes formas, ademas permite al usuario postear editar y eliminar su propio videojuego", img:videogames},
         {description:"Un proyecto hecho con la PokeApi, permite al usuario buscar entre los diferentes pokemones asi como crear un pokemon personalizado", img:pokemons},
         {description:"Eddie homepage es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en una imagen, tanto en su version desktop como mobile.", img:eddie}
        ]

    return(
        <div className="projects-container" id="projects">
            {a?.map(a=>
                 <AnimationOnScroll animateIn="animate__zoomIn" > <div className="projects-card">
                <div className="projects-img-container">
                <img className="projects-img" src={a.img}></img>
                </div>
                <div className="projects-description">
                    <p>{a.description}</p>
                </div>
                <div className="buttons-container">
                    <button className="button1">Project</button>
                    <button className="button2">Code</button>
                </div>
            </div>
            </AnimationOnScroll>
            )}
        </div>
    )
}