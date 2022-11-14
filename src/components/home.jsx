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
                    <h1>Bienvenidos a mi Portfolio</h1>  
                    <p></p>
                </div>
                </div>
            </header>
            <About></About> 
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
}