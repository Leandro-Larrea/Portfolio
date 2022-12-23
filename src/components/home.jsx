import { Skills } from "./Skills"
import { Footer } from "./Footer"
import { Nav } from "./nav"
import { Projects } from "./Projects"
import { About } from "./About"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


export const Home = () =>{
    return(
        <div className="main">
            <header className="header" id="home">
                <Nav/>
                <div className="container">
                <div className="card">
                <AnimationOnScroll  animateIn="animate__fadeInLeftBig"><h2>Hola!</h2><h3> soy</h3></AnimationOnScroll>
                <AnimationOnScroll  animateIn="animate__zoomIn"><h1>Leandro Larrea</h1></AnimationOnScroll>
                 <AnimationOnScroll  animateIn="animate__fadeInRightBig"><h3>Bienvenidos</h3> <h2>a mi portfolio</h2></AnimationOnScroll>
                </div>
                </div>
            </header>
            <About></About>
            <Skills></Skills> 
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
}