import { useScrollPostion } from "../hooks/useScrollPosition"

export const Nav = () =>{
    
    const scrollPosition = useScrollPostion()

    console.log(scrollPosition)

    

    return(
        <nav className={scrollPosition < 500? "nav": "scroll"} >
            <div className={"nav-container"}>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#projects">Projects</a>
                <a href="#home">Home</a>
            </div>
        </nav>
    )
}