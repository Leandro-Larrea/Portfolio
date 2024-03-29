import { useScrollPostion } from "../hooks/useScrollPosition";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useRef, useState, useMemo } from "react";
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import {
  WiDayCloudy,
  WiDaySunny,
  WiMoonAltWaningCrescent3,
} from "react-icons/wi";

export const Nav = (props) => {
  const scrollPosition = useScrollPostion();
  const { theme, setTheme } = useContext(ThemeContext);

  const x = (e) => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const innerWidth = window.innerWidth;
    return innerWidth;
  }

  useEffect(() => {
    if (windowSize > 700) setNav(false);
    getIndex();
  }, [windowSize]);

  useEffect(() => {
    getIndex();
  }, [scrollPosition]);

  const [nav, setNav] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const getIndex = async () => {
    if (props.getCurrentSlideIndex) {
      let a = await props.getCurrentSlideIndex();
      setCurrentSlide(a);
    }
  };

  return (
    <nav
      className={
        scrollPosition < 500 && windowSize > 700
          ? "nav animationOff"
          : `scroll ${theme}`
      }
    >
      <div className={"nav-container"}>
        <div
          className="hamburger"
          onClick={() => {
            nav ? setNav(false) : setNav(true);
          }}
        >
          <div>
            <div className={`line ${theme}`}></div>
            <div className={`line ${theme}`}></div>
            <div className={`line ${theme}`}></div>
          </div>
        </div>

        <button
          className={theme}
          style={
            theme === "dark"
              ? { cursor: "pointer", background: "transparent", border: "none" }
              : { display: "none" }
          }
          onClick={x}
        >
          <WiDaySunny color={theme} size={"30px"} />
        </button>

        <button
          className={theme}
          style={
            theme === "light"
              ? { cursor: "pointer", background: "transparent", border: "none" }
              : { display: "none" }
          }
          onClick={x}
        >
          <WiMoonAltWaningCrescent3 color={theme} size={"24px"} />
        </button>
        <a
          href="#contact"
          onClick={() => props.scrollToSlide && props.scrollToSlide(4)}
          className={
            currentSlide === 4
              ? `focus`
              : scrollPosition < 500
              ? "navADefault"
              : theme
          }
        >
          Contacto
        </a>
        <a
          href="#projects"
          onClick={() => props.scrollToSlide && props.scrollToSlide(3)}
          className={
            currentSlide === 3
              ? `focus`
              : scrollPosition < 500
              ? "navADefault"
              : theme
          }
        >
          Proyectos
        </a>
        <a
          href="#skills"
          onClick={() => props.scrollToSlide && props.scrollToSlide(2)}
          className={
            currentSlide === 2
              ? `focus`
              : scrollPosition < 500
              ? "navADefault"
              : theme
          }
        >
          Tecnologias
        </a>
        <a
          href="#about"
          onClick={() => props.scrollToSlide && props.scrollToSlide(1)}
          className={
            currentSlide === 1
              ? `focus`
              : scrollPosition < 500
              ? "navADefault"
              : theme
          }
        >
          Sobre Mi
        </a>
        <a
          href="#home"
          onClick={() => props.scrollToSlide && props.scrollToSlide(0)}
          className={
            currentSlide === 0
              ? `focus`
              : scrollPosition < 500
              ? "navADefault"
              : theme
          }
        >
          Inicio
        </a>
        <div className="ico-container">
          <p className={`logo ${theme}`}>L L</p>
        </div>
      </div>
      <div className={nav ? `navResponsiveOn ${theme}` : "navResponsiveOff"}>
        <a
          href="#home"
          onClick={() => props.scrollToSlide && props.scrollToSlide(0)}
          className={currentSlide === 0 ? `focus` : theme}
        >
          Inicio
        </a>
        <a
          href="#about"
          onClick={() => props.scrollToSlide && props.scrollToSlide(1)}
          className={currentSlide === 1 ? `focus` : theme}
        >
          Sobre Mi
        </a>
        <a
          href="#skills"
          onClick={() => props.scrollToSlide && props.scrollToSlide(2)}
          className={currentSlide === 2 ? `focus` : theme}
        >
          Tecnologias
        </a>
        <a
          href="#projects"
          onClick={() => props.scrollToSlide && props.scrollToSlide(3)}
          className={currentSlide === 3 ? `focus` : theme}
        >
          Proyectos
        </a>
        <a
          href="#contact"
          onClick={() => props.scrollToSlide && props.scrollToSlide(4)}
          className={currentSlide === 4 ? `focus` : theme}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};
