import "./styleform.css"

const FormularioPago = ({ title, question, precio, state, changeState, tipo, logeado }) => {
    return (
        <>
            <form className="teleconsulta_pay">
                <div className="pagar__container-second">
                    <h3 className="h3_teleconsulta">{title}</h3>
                    <b onClick={changeState}>&times;</b>
                </div>

                {!logeado && (
                    <>
                        <div className="input__container">
                            <label htmlFor="name">Nombre madre</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="lastname">Apellido madre</label>
                            <input type="text" id="lastname" name="lastname" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="age">Edad madre</label>
                            <input type="text" id="age" name="age" required />
                        </div>
                    </>
                )}

                <div className="input__container">
                    <label htmlFor="email">Correo madre</label>
                    <input type="email" name="email" id="email" required />
                </div>

                {tipo === "embarazo" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="mombirth_date">Fecha de nacimiento de la madre</label>
                            <input type="date" name="mombirth_date" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="childbirth_date">Fecha estimada del parto</label>
                            <input type="date" name="childbirth_date" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtype">Tipo de embarazo</label>
                            <select id="birthtype" name="birthtype" required>
                                <option value="simple">Simple</option>
                                <option value="multiple">Multiple</option>
                            </select>
                        </div>
                        <div className="input__container">
                            <label htmlFor="mom_height">Estatura de la madre en cm (opcional)</label>
                            <input type="text" id="mom_height" name="mom_height" />
                        </div>
                        <div className="input__container">
                            <label htmlFor="mom_weight">Peso de la madre en kg (opcional)</label>
                            <input type="text" id="mom_weight" name="mom_weight" />
                        </div>
                        <div className="input__container-save">
                            <input type="checkbox" id="pregnant_before" name="pregnant_before" />
                            <label htmlFor="pregnant_before">He estado embarazada antes</label>
                        </div>
                    </>
                }

                {tipo === "bebe" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="baby_name">Nombre del bebé</label>
                            <input type="text" id="baby_name" name="baby_name"/>
                        </div>
                        <div className="input__container">
                            <label htmlFor="babybirth_date">Fecha de nacimiento del bebé</label>
                            <input type="date" name="babybirth_date" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtypebaby">Tipo de parto</label>
                            <select id="birthtypebaby" name="birthtypebaby" required>
                                <option value="cesarea">Cesárea</option>
                                <option value="natural">Natural</option>
                            </select>
                        </div>
                        <div className="input__container">
                            <label htmlFor="baby_height">Estatura del bebé en cm (opcional)</label>
                            <input type="text" id="baby_height" name="baby_height" />
                        </div>
                        <div className="input__container">
                            <label htmlFor="baby_weight">Peso del bebé en kg (opcional)</label>
                            <input type="text" id="baby_weight" name="baby_weight" />
                        </div>
                    </>
                }

                {tipo === "postparto" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="lastbirth">Fecha último parto</label>
                            <input type="date" id="lastbirth" name="lastbirth" required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtypebaby">Tipo de parto</label>
                            <select id="birthtypebaby" name="birthtypebaby" required>
                                <option value="cesarea">Cesárea</option>
                                <option value="natural">Natural</option>
                            </select>
                        </div>
                        <div className="input__container">
                            <label htmlFor="baby_height">Estatura del bebé en cm (opcional)</label>
                            <input type="text" id="baby_height" name="baby_height" />
                        </div>
                        <div className="input__container">
                            <label htmlFor="baby_weight">Peso del bebé en kg (opcional)</label>
                            <input type="text" id="baby_weight" name="baby_weight" />
                        </div>
                        <div className="input__container-save">
                            <input type="checkbox" id="pregnant_before" name="pregnant_before" />
                            <label htmlFor="pregnant_before">He estado embarazada antes</label>
                        </div>
                    </>
                }


                {question &&
                    (<div className="contenedorpagar__pregunta">
                        <label htmlFor="question">¿Cuál es su pregunta?</label>
                        <input type="text" name="question" id="question" />
                    </div>
                    )}

                <div className="input__container-save">
                    <input type="checkbox" name="save_data" />
                    <p >Autorizo que guarden mis datos para futuras consultas.</p>
                </div>
                <div className="pagar__buton-container">
                    <button type="submit">Ir a pagar ${precio} US</button>
                </div>

            </form>
            {state && <div className="overlay__fondo"></div>}
        </>
    )
}

export default FormularioPago