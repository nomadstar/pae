import { useState } from "react"

const FormularioPago = ({title, question, precio, state, changeState}) => {
    const [temaC, setTemaConsulta] = useState("");

    const handleTemaConsultaChange = (event) => {
        setTemaConsulta(event.target.checked ? 'tienehijos' : '');
    };

    return (
    <>
        <form className="teleconsulta_pay">
            <div className="contenedor_pagar-teleconsulta2">
                <div className="pagar__container-second">
                    <h3 className="h3_teleconsulta">{title}</h3>
                    <b onClick={changeState}>&times;</b>
                </div>
                <div className="pagar_contenedor_inputs2">
                    <div>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="lastname">Apellido: </label>
                        <input type="text" name="lastname" id="lastname" required />
                    </div>
                    <div>
                        <label htmlFor="age">Edad: </label>
                        <input type="text" id="age" name="age" />
                    </div>
                    <div className="fecha_div">
                        <label htmlFor="nacimiento">Fecha de nacimiento de la madre: </label>
                        <input type="date" name="nacimiento" id="nacimiento" required />
                    </div>
                    <div className="fecha_div">
                        <label htmlFor="fecha_parto">Fecha estimada de parto: </label>
                        <input type="date" name="fecha_parto" id="fecha_parto" required />
                    </div>
                    <div className="div__tipo-embarazo">
                        <h4>Tipo de embarazo</h4>
                        <div>
                            <label htmlFor="o1">Simple</label>
                            <input
                                type="radio"
                                id="o1"
                                name="option"
                                value="simple"
                            />
                        </div>

                        <div>
                            <label htmlFor="opcion2">Múltiple</label>
                            <input
                                type="radio"
                                id="opcion2"
                                name="option"
                                value="multiple"
                            />
                        </div>


                    </div>
                    <div>
                        <label htmlFor="estatura_madre">Estatura de la madre (metros): </label>
                        <input type="text" name="estatura_madre" id="estatura_madre" required />
                    </div>
                    <div>
                        <label htmlFor="peso_madre">Peso de la madre (kg): </label>
                        <input type="text" name="peso_madre" id="peso_madre" required />
                    </div>
                    <div id="new" className="container__embarazada-antes">
                        <label htmlFor="embarazada">Ya he estado embarazada antes</label>
                        <input
                            type="checkbox"
                            id="embarazada"
                            name="embarazada"
                            value="tienehijos"
                            checked={temaC === "tienehijos"}
                            onChange={handleTemaConsultaChange}
                        />
                    </div>
                    <div>
                        {temaC === "tienehijos" && (
                            <div className="contenedor_hijos">
                                <div>
                                    <label htmlFor="cantidad_hijos">¿Cuántos hijos tiene?</label>
                                    <input type="number" name="cantidad_hijos" id="cantidad_hijos" required />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="preguntas_finales-container">
                        <div>
                            <label htmlFor="perdido_bebe">¿Has perdido un bebé?</label>
                            <input type="checkbox" name="perdido_bebe" id="perdido_bebe" required />
                        </div>
                        <div>
                            <label htmlFor="fuma">¿Fumas?</label>
                            <input type="checkbox" name="fuma" id="fuma" required />
                        </div>
                        <div>
                            <label htmlFor="alcohol">¿Bebes alcohol?</label>
                            <input type="checkbox" name="alcohol" id="alcohol" required />
                        </div>
                        <div>
                            <label htmlFor="droga">¿Consumes algún tipo de droga?</label>
                            <input type="checkbox" name="droga" id="droga" required />
                        </div>
                        <div>
                            <label htmlFor="discapacidad">¿Tienes algún tipo de discapacidad?</label>
                            <input type="checkbox" name="discapacidad" id="discapacidad" required />
                        </div>
                        <div>
                            <label htmlFor="ejercicio">¿Te ejercitas? </label>
                            <input type="checkbox" name="ejercicio" id="ejercicio" required />
                        </div>
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
                </div>
            </div>
        </form>
        {state && <div className="overlay__fondo"></div>}
    </>
    )
}

export default FormularioPago