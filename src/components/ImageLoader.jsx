import { useState } from "react";

export const ImageLoader = ({ src, alt, type = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={type + "imageContainer"}>
      <img
        src={src}
        alt={alt}
        className={imageLoaded ? `${type}on` : `${type}off`}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <div className={`${type}loaderContainer`}></div>}
    </div>
  );
};
