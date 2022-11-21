import { About } from "./About"
import { Footer } from "./Footer"
import { Nav } from "./nav"
import { Projects } from "./Projects"


export const Home = () =>{
    return(
        <div className="main">
            <header className="header" id="home">
                <Nav/>
                <div className="container">
                <div className="card">
                <h2>Hola!</h2><h3> soy</h3><h1>Leandro Larrea</h1> <h3>Bienvenidos</h3> <h2>a mi portfolio</h2>
                </div>
                </div>
            </header>
            <About></About> 
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
}