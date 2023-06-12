import videogames from "../media/images/videogames.png";
import pokemons from "../media/images/pokemons.png";
import pokemonsMobile from "../media/images/pokemonsMobile.png";
import eddie from "../media/images/eddie.png";
import eddieMobile from "../media/images/EddieMobile.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import github from "../media/images/programing-icos/github.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import pcScreen from "../media/images/pcScreen.png";
import phoneScreenCut from "../media/images/phoneScreenCut.png";
import videoGamesMobile from "../media/images/videoGamesMobile.png";
import modernDesignMobile from "../media/images/modernDesignMobile.png";
import modernDesign from "../media/images/modernDesign.png";
import TommyEmmanuel from "../media/images/TommyEmmanuel.png";
import androidApk from "../media/images/androidApk.png";
import ConsoleGame from "../media/images/ConsoleGame.png";
import TommyEmmanuelMobile from "../media/images/TommyEmmanuelMobile.png";
import { useScrollPostion } from "../hooks/useScrollPosition";
import { ImageLoader } from "./ImageLoader";

export const Projects = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  let a = [
    {
      link: "https://github.com/Leandro-Larrea/PF-Ecommerce",
      description:
        "App Android de un E-commerce de Productos Gaming desarrollada grupalmente, incluye auntenticación de terceros integrada, Pasarela de Pagos, Filtros combinados, Ordenamientos, Cloudinary, Local Storage, Async Storage, Reviews/Puntuación, Dashboard de Admin (C.R.U.D), Notificaciones push/Nodemailer, Borrado Logico y Carrito de Compras.",
      img: androidApk,
      imgR: ConsoleGame,
      demo: "https://docs.google.com/document/d/1qs0IvDwaDGqwriNuuYnNeAB_u87-_D7pBFFoA2wpXGc/edit",
      tecnologias:
        "React native,NodeJs, Express, Redux, MongoDb, Mongoose Css, Javascript",
    },
    {
      link: "https://github.com/Leandro-Larrea/videoGames",
      demo: "https://leangames.vercel.app/",
      description:
        "Un proyecto individual usando la api de videogames RAWG en el que integre las tecnologias que aprendi en el curso de HENRY, muestra diferentes juegos de la api, los cuales podemos filtrar y ordenar de diferentes formas, ademas permite al usuario postear editar y eliminar su propio videojuego",
      img: videogames,
      imgR: videoGamesMobile,
      tecnologias:
        "React, NodeJs, Express, Redux, postgresql, sequelize Css, Javascript",
    },
    {
      link: "https://github.com/Leandro-Larrea/Pokemon",
      demo: "https://pokemon-eight-plum.vercel.app/",
      description:
        "Un proyecto hecho con la PokeApi, permite al usuario buscar entre los diferentes pokemones asi como crear un pokemon personalizado",
      img: pokemons,
      imgR: pokemonsMobile,
      tecnologias:
        "React, NodeJs, Express, Redux, postgresql, sequelize Css, Javascript",
    },
    {
      link: "https://github.com/Leandro-Larrea/Edie-home-page",
      description:
        "Eddie homepage es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en un figma, tanto en su version desktop como mobile.",
      img: eddie,
      imgR: eddieMobile,
      demo: "https://airy-luck-feta.glitch.me/#",
      tecnologias: "Html, Css, Javascript",
    },
    {
      link: "https://github.com/Leandro-Larrea/Edie-home-page",
      description:
        "Modern interior design es un desafio de devchallenges.io el objetivo era crear una pagina identica a la presentada en una figma, tanto en su version desktop como mobile.",
      img: modernDesign,
      imgR: modernDesignMobile,
      demo: "https://exclusive-cubic-woodpecker.glitch.me/interior-consultant-master/",
      tecnologias: "Html, Css",
    },
    {
      link: "https://octagonal-glorious-kitten.glitch.me/",
      description:
        "La pagina de tributo fue mi primer proyecto, la primera vez que junte lo que aprendi en html y css e hice algo propio.",
      img: TommyEmmanuel,
      imgR: TommyEmmanuelMobile,
      demo: "https://octagonal-glorious-kitten.glitch.me/",
      tecnologias: "Html, Css",
    },
  ];

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

  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(
    windowSize < 630 ? 1 : Math.floor(windowSize / 630)
  );

  const changePage = (e) => {
    e.preventDefault;

    setCurrentPage(e);
  };

  useEffect(() => {
    if (projectsPerPage !== Math.floor(windowSize / 630)) {
      setProjectsPerPage(windowSize < 630 ? 1 : Math.floor(windowSize / 630));
    }
  }, [windowSize]);

  let pagesPerWidth =
    windowSize < 1260
      ? a.length
      : a.length % 2 === 0
      ? Math.floor(a.length / Math.floor(windowSize / 630))
      : Math.floor(a.length / Math.floor(windowSize / 630)) + 1;

  useEffect(() => {
    if (currentPage > pagesPerWidth) setCurrentPage(pagesPerWidth);
  }, [pagesPerWidth]);

  const lastproject = currentPage * projectsPerPage;
  const firstproject = lastproject - projectsPerPage;
  const renderprojects = a.slice(firstproject, lastproject);

  const fcUpdate = (x) => {
    setCurrentPage(x);
  };

  let pcScreen2 = (
    <img className="projects-desktop-screen" src={pcScreen}></img>
  );

  return (
    <div className={`projects ${theme}`} id="projects">
      <div className="projects-titles-container">
        <AnimationOnScroll
          duration={0.5}
          animateIn="animate__fadeInLeftBig"
          animateOnce={true}
        >
          <div className="titles">
            <h1>Mis</h1>
            <h1> proyectos</h1>
            <h2></h2>
          </div>
        </AnimationOnScroll>
      </div>
      <div className="pages">
        {a?.map((b, i) => {
          if (i < pagesPerWidth) {
            return (
              <AnimationOnScroll
                key={i}
                duration={0.5}
                delay={i * 200}
                animateIn="animate__zoomIn"
                animateOnce={true}
              >
                <button
                  key={i}
                  className={currentPage === i + 1 ? "buttonOn" : `${theme}`}
                  onClick={() => changePage(i + 1)}
                >
                  {i + 1}
                </button>
              </AnimationOnScroll>
            );
          }
        })}
      </div>
      <div className={`projects-container ${theme}`}>
        {renderprojects?.map((a, i) => {
          return (
            <AnimationOnScroll
              animateOnce={true}
              key={i}
              duration={0.3}
              animateIn="animate__zoomIn"
            >
              <div className={`projects-card ${theme}`} key={a.link}>
                <div className="projects-img-container">
                  {<img className="projects-desktop-screen" src={pcScreen} />}
                  <div className="tecnologiasContainer">
                    <div className="tecnologias">{a.tecnologias}</div>
                  </div>
                  <ImageLoader src={a.img}></ImageLoader>
                  <div className="projects-mobile">
                    <div className="projects-mobile-position">
                      <img
                        className="projects-mobile-screen"
                        src={phoneScreenCut}
                      ></img>
                      <ImageLoader type={"mobile"} src={a.imgR}></ImageLoader>
                    </div>
                  </div>
                </div>
                <div className="projects-description">
                  <p className={`${theme}`}>{a.description}</p>
                </div>
                <div className="buttons-container" key={a.link}>
                  <a
                    key={a.link}
                    className={`button1 ${theme}`}
                    href={a.demo ? a.demo : a.link}
                    target="_blank"
                  >
                    Proyecto
                  </a>
                  <a
                    className={`button2 ${theme}`}
                    href={a.link}
                    target="_blank"
                  >
                    <img src={github} />
                    <p className={`buttons-code`}>{"<"}</p>
                    <p className={`buttons-code`}>{"Code"}</p>
                    <p className={`buttons-code`}>{"/>"}</p>
                  </a>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
};
