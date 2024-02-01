import {Link} from "react-router-dom"
import image1 from "../assets/n1.webp"
import image2 from "../assets/n2.webp"
import image3 from "../assets/n3.webp"
import image4 from "../assets/n4.webp"
import Instruct from "../components/Instruct"
import "./header.css"

const Header = () => {
    return (
        <header className="app__header">
                <div className="app__header-content__title">
                    <div>
                        <h1>Pregúntale al Experto</h1>
                    </div>
                    <p>
                        Acompañamos a las familias a tener embarazos sanos y venturosos, crianzas positivas y felices. Trabajamos con profesionales de la salud para que tengas el mejor contenido y puedas tomar decisiones acertadas. Somos un medio dirigido a gestantes y padres con niños en edad pediátrica.
                    </p>
                    <div className="app__header-content__buttons">
                        <div>
                        <Link className='' to='/begin'>
                            Iniciar consulta
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="app__header-diagram">
                    <Instruct image={image1} texto="Haz clic en el botón Iniciar Consulta"/>
                    <Instruct image={image2} texto="Cuéntanos tus síntomas"/>
                    <Instruct image={image3} texto="Ingresa tu código o paga la consulta"/>
                    <Instruct image={image4} texto="La información llega a tu correo"/>
                </div>
        </header>
    );
};

export default Header;
