import { useEffect, useState } from "react"

export const useScrollPostion = () =>{
    const [scrollPostion, setScrollPostion] = useState(0);

    useEffect(()=>{
        const updatePosition = () =>{
            setScrollPostion(window.pageYOffset);
        };
    window.addEventListener("scroll",updatePosition);
    updatePosition();

    return ()=> window.removeEventListener("scroll", updatePosition);
    },[])
    return scrollPostion;
} 