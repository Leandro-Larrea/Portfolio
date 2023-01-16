import { useState } from "react";


export const ImageLoader =({src, alt})=>{
    const [imageLoaded, setImageLoaded] = useState(false)

    return(
        <div className="imageContainer">
            <img
                src={src}
                alt={alt}
                className={imageLoaded? `on`: `off`}
                onLoad={()=> setImageLoaded(true)}
            />
          
        </div>
        
    )
}