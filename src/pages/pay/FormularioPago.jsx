import { useState } from "react"

const FormularioPago = ({ title, question, precio, state, changeState }) => {
    const [temaC, setTemaConsulta] = useState("");

    const handleTemaConsultaChange = (event) => {
        setTemaConsulta(event.target.checked ? 'tienehijos' : '');
    };

    return (
        <>
            <form className="teleconsulta_pay">
                <div className="pagar__container-second">
                    <h3 className="h3_teleconsulta">{title}</h3>
                    <b onClick={changeState}>&times;</b>
                </div>
                {question &&
                    (<div className="contenedorpagar__pregunta">
                        <label htmlFor="question">¿Cuál es su pregunta?</label>
                        <input type="text" name="question" id="question" />
                    </div>
                )}

                <div className="pagar__buton-container">
                    <button type="submit">Ir a pagar ${precio} US</button>
                </div>

            </form>
            {state && <div className="overlay__fondo"></div>}
        </>
    )
}

export default FormularioPago