import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        {/* Logo y descripción */}
                        <div className="col-lg-3 mb-4 mb-lg-0">
                            <div className="footer-info">
                                <h4>Redes</h4>
                                <div className="social-links">
                                    <a href="https://github.com/Lucasiocco" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/lucas-iocco-b81394181/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Links rápidos */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h4>Links Rápidos</h4>
                            <ul className="footer-links">
                                <li><a href="#hero">Inicio</a></li>
                                <li><a href="#about">Sobre Mí</a></li>
                                <li><a href="#projects">Proyectos</a></li>
                                <li><a href="#contact">Contacto</a></li>
                            </ul>
                        </div>

                        {/* Servicios */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h4>Servicios</h4>
                            <ul className="footer-links">
                                <li>Desarrollo Web</li>
                                <li>UI/UX Design</li>
                                <li>SEO</li>
                                <li>Testing</li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <img
                                src="./img/stickerFooter.png"
                                alt="Lucas Nahuel Iocco"
                                className="about-image"
                                style={{ width: '150px' }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Separador con forma de onda */}
            <div className="footer-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="0.05" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="mb-0">© {new Date().getFullYear()} Lucas Nahuel Iocco. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;