import image1 from "../assets/n1.webp"
import image2 from "../assets/n2.webp"
import image3 from "../assets/n3.webp"
import image4 from "../assets/n4.webp"
import Instruct from "../components/Instruct"
import "./header.css"

const Header = () => {
    return (
        <header className="app__header">
            <div className="overlay">
                <div className="sobre_overlay"></div>
            </div>

            <div className="app__header-bigcontainer">
                <div className="app__header-content__title">
                    <h1>Pregúntale al Experto</h1>
                    <p>
                        Acompañar a las familias a tener embarazos sanos y venturosos y crianzas positivas y felices. Con la ayuda de diferentes profesionales, puedes llevar tu día a día con seguridad.
                    </p>
                    <div>
                        <a href="/begin">Iniciar consulta</a>
                        <a href="#pros">Ver profesionales</a>
                    </div>
                </div>

                <div className="app__header-diagram">
                    <Instruct image={image1} texto="Accede e inicia con el botón de nuestra página"/>
                    <Instruct image={image2} texto="Indica el tipo de consulta y síntomas"/>
                    <Instruct image={image3} texto="Paga por el tipo de servicio: consulta inmediata o pregunta al
                    doctor"/>
                    <Instruct image={image4} texto="Envía tus datos y espera tu respuesta"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
