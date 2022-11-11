import { useScrollPostion } from "../hooks/useScrollPosition"

export const Nav = () =>{
    
    const scrollPosition = useScrollPostion()

    console.log(scrollPosition)

    return(
        <nav className={scrollPosition < 500? "nav": "scroll"} >
            <div className={"nav-container"}>
                <a>About</a>
                <a>Contact</a>
                <a>Projects</a>
                <a>Home</a>
            </div>
        </nav>
    )
}