import videogames from "../media/images/videogames.png";
import pokemons from "../media/images/pokemons.png";
import eddie from "../media/images/eddie.png";


export const Projects = ()=>{

    let a =[videogames, pokemons, eddie]

    return(
        <div className="projects-container" id="projects">
            {a?.map(a=> <div className="projects-card">
                <div className="projects-img-container">
                <img className="projects-img" src={a}></img>
                </div>
                <div className="buttons-container">
                    <button className="button1">Project</button>
                    <button className="button2">Code</button>
                </div>
            </div>)}
        </div>
    )
}