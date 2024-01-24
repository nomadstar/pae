import { FaCheckCircle } from "react-icons/fa"
import whatis_doctor from "../assets/doctor.webp"

const Whatis = () => {
    return (
        <div className='whatis__container' id='whatispae'>
            <div className='whatis__content c1'>
                <h2>¿Qué es PAE?</h2>
                <p>Somos un medio dirigido a mujeres gestantes y mamás con niños en edad pediátrica. Trabajamos con ginecólogos y pediatras para llevar a las familias el mejor contenido y acompañarlas a tomar decisiones informadas sobre su embarazo y bebé. Pregúntale al Experto se enfoca en dar servicio al cliente en línea de una manera confiable, rápida, segura.</p>
                <div className='whatis__content-buttons'>
                    <a target='_blank' href='https://mimanualdelbebe.com'>Mi Manual del Bebé</a>
                    <a href="/begin">Realizar consulta</a>
                </div>
            </div>
            <div className='whatis__image'>
                <img src={whatis_doctor} alt="doctor" />
            </div>
            <div className='whatis__content c2'>
                <h2>¿Qué servicios ofrece?</h2>
                <p>Pregúntale al Experto es un sitio en línea donde puedes consultar a profesionales de manera rápida o con una teleconsulta. De foma segura, sencilla y confiable puedes resolver tus dudas y cuestionamientos sobre un desarrollo sano.</p>
                <div className='whatis__check-list'>
                    <p><FaCheckCircle /> <b>Respuesta en menos de 2 horas.</b></p>
                    <p><FaCheckCircle /> <b>Pedíatras, ginecólogos, especialistas.</b></p>
                    <p><FaCheckCircle /> <b>Teleconsulta de 15 minutos.</b></p>
                </div>
            </div>
        </div>
    )
}

export default Whatis