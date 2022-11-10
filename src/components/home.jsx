import { About } from "./About"
import { Nav } from "./nav"
import { Projects } from "./Projects"

export const Home = () =>{
    return(
        <div className="main">
            <header className="header">
                <Nav/>
                <div className="container">
                    <div className="card">
                        <h3>Lorem ipsum dolor sit, amet consectet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ipsa vero autem dolore     deserunt sit natus nobis? Necessitatibus quidem modi aspernatur pariatur, facere officiis       incidunt explicabo, ullam sapiente excepturi repudiandae.</p>
                        <a>Git Hub</a>
                    </div>
                </div>
            </header>
            <About/>
            <Projects/>
        </div>
    )
}