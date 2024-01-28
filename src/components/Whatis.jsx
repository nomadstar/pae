import { FaCheckCircle } from "react-icons/fa"
import whatis_doctor from "../assets/doctor.webp"

const Whatis = () => {
    return (
        <div className='whatis__container' id='whatispae'>
            <div className='whatis__image'>
                <img src={whatis_doctor} alt="doctor" />
            </div>
            <div className='whatis__content'>
                <h2>¿Qué es Pregúntale al Experto?</h2>
                <p>Te permite consultar especialistas de manera rápida o solicitar una Teleconsulta. Resuelve tus dudas de forma segura, sencilla y confiable.</p>
                <div className='whatis__check-list'>
                    <p><FaCheckCircle /> <b>Respuestas a consultas en menos de 3 horas</b></p>
                    <p><FaCheckCircle /> <b>Teleconsultas de 15 minutos con médicos especialistas</b></p>
                </div>
                <div className='whatis__content-buttons'>
                    <a href="/begin">Iniciar consulta</a>
                    <a target='_blank' href='https://mimanualdelbebe.com'>Mi Manual del Bebé</a>
                </div>
            </div>
        </div>
    )
}

export default Whatis