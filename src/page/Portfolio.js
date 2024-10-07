import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from "react-typed";


const Portfolio = () => {
    return (
        <div>
            {/* Header */}
            <header className="fixed-top">
                <nav className="custom-header navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#hero">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">Sobre mí</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section id="hero" className="hero-section text-center bg-dark text-white py-5">
                <div className="container">
                    <h1>Bienvenidos a mi Portfolio</h1>
                    <img src="./img/laptopwave.png" alt="Logo" className="mb-3" style={{ width: '250px' }} />
                    <ReactTyped style={{ display: 'block' }}
                        strings={[
                            "Fullstack Developer,",
                            "QA Tester Manual.",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input type="text" style={{ width: '155px' }}/>
                    </ReactTyped>
                </div>
            </section>

            {/* About Me Section */}
            <section id="about" className="about-me-section py-5">
                <div className="container text-center">
                    <h2 className="text-center mb-4">Sobre mí</h2>
                    <div className='row justify-content-center'>
                        <div className='col-lg-3 lg-3'>
                            <img src="./img/fotoPerfil.jpg" alt="About Me" className="fotoPerfil" style={{ width: '250px', height: '250px' }} />
                        </div>
                        <div className='col-lg-4 lg-4'>
                            <p>¡Hola, soy Lucas!</p>
                            <p>Durante los últimos años, he sido desarrollador front-end y actualmente estoy ampliando mi conjunto de habilidades para incluir el desarrollo back-end. Soy una persona autodidacta, apasionada y responsable.</p>
                            <p>En mis tiempos libres me gusta hacer actividad fisica, soy un apasionado del deporte. Pero ojo que tambien le dedido un tiempo a ver alguna serie/pelicula que tengo ahi en el cajon de recomendados.</p>
                        </div>
                        <div className='col-lg-3 lg-3'>
                            <p>Mi stack tecnologico:</p>
                            <img src="./img/html.png" alt="html"/>
                            <img src="./img/css.png" alt="css"/>
                            <img src="./img/javascript.png" alt="js"/>
                            <img src="./img/react.png" alt="react"/>
                            <img src="./img/python.png" alt="python"/>
                            <img src="./img/django.png" alt="django"/>
                            <img src="./img/java.png" alt="java"/>
                            <img src="./img/misql.png" alt="misql"/>
                            <img src="./img/nodejs.png" alt="nodejs"/>
                            <img src="./img/firebase.png" alt="firebase"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Proyectos</h2>
                    <div className="row justify-content-around" id='proyectosRow'>
                        <div className="col-md-5 mb-5">
                            <div className="card">
                                <img src="./img/rekonMedia.png" className="card-img-top" alt="Proyecto 1" />
                                <div className="card-body">
                                    <h5 className="card-title">RekonMedia</h5>
                                    <p className="card-text">Bootstrap - Javascript - Firebase</p>
                                    <a href="https://github.com/Lucasiocco/RekonMedia" target="_blank" rel="noopener noreferrer">Ver Codigo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <div className="card">
                                <img src="./img/coreClub.png" className="card-img-top" alt="Proyecto 1" />
                                <div className="card-body">
                                    <h5 className="card-title">CoreClub</h5>
                                    <p className="card-text">Bootstrap - Javascript - ReactJs</p>
                                    <a href="https://github.com/Lucasiocco/ioccocoreclub" target="_blank" rel="noopener noreferrer">Ver Codigo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <div className="card">
                                <img src="./img/urbanC.png" className="card-img-top" alt="Proyecto 1" />
                                <div className="card-body">
                                    <h5 className="card-title">UrbanClothes</h5>
                                    <p className="card-text">Bootstrap - Javascript - ReactJs</p>
                                    <a href="https://github.com/Lucasiocco/ProyectoEcommerce" target="_blank" rel="noopener noreferrer">Ver Codigo</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-5">
                            <div className="card">
                                <img src="./img/calculadoraPy.png" className="card-img-top" alt="Proyecto 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Calculadora</h5>
                                    <p className="card-text">Bootstrap - Javascript - Python</p>
                                    <a href="https://github.com/Lucasiocco/CalculadoraPy" target="_blank" rel="noopener noreferrer">Ver Codigo</a>
                                </div>
                            </div>
                        </div>
                        {/* Repetir para otros proyectos */}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section py-5 text-center">
                <div className="container">
                    <h2>Contacto</h2>
                    <p>Sígueme en mis redes sociales:</p>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://github.com/Lucasiocco" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-iocco-b81394181/" target="_blank" rel="noopener noreferrer" className="mx-2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </section>
            <footer className="footer-section bg-dark py-4">
                <div className="container text-center d-flex align-items-center justify-content-between">
                    {/* Imagen */}
                    <img src="./img/stickerFooter.png" alt="Logo" className="mb-3" style={{ width: '200px' }} />

                    {/* Texto de Copyright */}
                    <p>&copy; 2024 Lucas Iocco. Todos los derechos reservados.</p>

                    {/* Enlaces de Navegación */}
                    <ul className="list">
                        <li className="list-item">
                            <a href="#hero">Inicio</a>
                        </li>
                        <li className="list-item">
                            <a href="#about">Sobre mí</a>
                        </li>
                        <li className="list-item">
                            <a href="#projects">Proyectos</a>
                        </li>
                        <li className="list-item">
                            <a href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;
