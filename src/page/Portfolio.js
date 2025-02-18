import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from "react-typed";
import ContactForm from '../page/ContactForm';
import Footer from '../page/Footer';


const Portfolio = () => {
    return (
        <div>
            {/* Header */}
            <header className="fixed-top">
                <nav className="custom-header navbar navbar-expand-lg navbar-dark">
                    <div className="container">

                        <button
                            className="navbar-toggler custom-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="toggler-icon"></span>
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
                    <h1>Bienvenidos a mi Portfolio_</h1>
                    <img src="./img/laptopwave.png" alt="Logo" className="mb-3" />
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
                        <input type="text" style={{ width: '155px' }} />
                    </ReactTyped>
                </div>
            </section>

            {/* About Me Section */}

            <section id="about" className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Columna de imagen */}
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="about-image-container">
                                <img
                                    src="./img/fotoPerfil.jpg"
                                    alt="Lucas Nahuel Iocco"
                                    className="about-image"
                                />
                                <div className="experience-badge">
                                    <span className="years">2+</span>
                                    <span className="text">Años de<br />Experiencia</span>
                                </div>
                            </div>
                        </div>

                        {/* Columna de información */}
                        <div className="col-lg-7">
                            <div className="about-content">
                                <h2 className="section-title">Sobre Mí_</h2>
                                <p className="lead mb-4">Frontend Developer apasionado por crear experiencias web únicas.</p>

                                {/* Cards de info destacada */}
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <div className="info-card">
                                            <i className="fas fa-code card-icon"></i>
                                            <h3>Desarrollo Web</h3>
                                            <p>Especializado en React y tecnologías modernas</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-card">
                                            <i className="fas fa-laptop-code card-icon"></i>
                                            <h3>Testeo de Aplicaciones</h3>
                                            <p>Elaboración de casos de prueba, ejecución y reporte de resultados.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="skills-container">
                                    <h3 className="mb-3">Habilidades Técnicas</h3>
                                    <div className="skill-tags">
                                        <span className="skill-tag">Bases de Datos</span>
                                        <span className="skill-tag">Análisis de Datos</span>
                                        <span className="skill-tag">Power Bi</span>
                                        <span className="skill-tag">SEO</span>
                                        <span className="skill-tag">Web Scraping</span>
                                        <span className="skill-tag">Hosting</span>
                                        {/* Agrega más skills según necesites */}
                                    </div>
                                    <h3 class="mb-3" style={{ paddingTop: '20px' }}>Mi Stack Tecnológico</h3>
                                    <div className="img-stack">
                                        <img src="./img/html.png" alt="html" />
                                        <img src="./img/css.png" alt="css" />
                                        <img src="./img/javascript.png" alt="js" />
                                        <img src="./img/react.png" alt="react" />
                                        <img src="./img/python.png" alt="python" />
                                        <img src="./img/django.png" alt="django" />
                                        <img src="./img/java.png" alt="java" />
                                        <img src="./img/misql.png" alt="misql" />
                                        <img src="./img/nodejs.png" alt="nodejs" />
                                        <img src="./img/firebase.png" alt="firebase" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects-section bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Proyectos_</h2>
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
                                <img src="./img/electroX.png" className="card-img-top" alt="Proyecto 1" />
                                <div className="card-body">
                                    <h5 className="card-title">electroX</h5>
                                    <p className="card-text">Bootstrap - Javascript - PHP</p>
                                    <div>
                                        <a className="card-link" href="https://github.com/Lucasiocco/electroX" target="_blank" rel="noopener noreferrer">Ver Codigo</a>
                                        <a className="card-link" href="https://electro-x.netlify.app/?fbclid=PAZXh0bgNhZW0CMTEAAaY4cA0WSkbWRu3np_uTlRW_FtFLin-LHa45e7MmrKMMQa_wmeNuxCF3zK0_aem_yTj6q7c8FEwkXngftsPWjg" target="_blank" rel="noopener noreferrer">Ir al Sitio</a>
                                    </div>
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
            <section id="contact" className="contact-section text-center">
                <div className="container">
                    <h2>Contacto_</h2>
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-8">
                            <ContactForm />
                        </div>
                    </div>
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

            <footer>
                <Footer />
            </footer>



        </div>
    );
};

export default Portfolio;
