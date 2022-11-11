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
                    <h1>Full Stack</h1>
                    <h3>asd asdsad</h3>
                    <h3>asdsadadssda</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veritatis officiis atque quisquam velit similique iusto, soluta mollitia incidunt, aperiam molestiae est suscipit provident perspiciatis cum nam. Perspiciatis, quibusdam maxime!</p>
                </div>
                </div>
            </header>
            <About></About>
        </div>
    )
}