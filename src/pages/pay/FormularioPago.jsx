import Checkout from "../../components/Checkout"
import "./styleform.css"

function enviarInfo(userInfo, data){
    fetch('http://10.50.2.239:4000/api/pae/success', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ userInfo: userInfo, data: data }),
                            })
                                .then(response => response.json())
                                .then(data => {
                                    console.log('Respuesta del servidor:', data);
                                    // Puedes realizar otras acciones después de recibir la respuesta
                                })
                                .catch(error => {
                                    console.error('Error al realizar la solicitud:', error);
                                    // Puedes manejar los errores aquí
                                });
}

const FormularioPago = ({ title, question, precio, state, userInfo, changeUserInfo, changeState, tipo, dataEmbarazo, dataPostparto, dataBebe, changeEmbarazo, changeBebe, changePostparto }) => {
    return (
        <>
            <form className="teleconsulta_pay">
                <div className="pagar__container-second">
                    <h3 className="h3_teleconsulta">{title}</h3>
                    <b onClick={changeState}>&times;</b>
                </div>

                <div className="input__container">
                    <label htmlFor="name">Nombre madre</label>
                    <input type="text" id="name" name="name" value={userInfo.name} onChange={changeUserInfo} required />
                </div>
                <div className="input__container">
                    <label htmlFor="lastname">Apellido madre</label>
                    <input type="text" id="lastname" name="lastname" value={userInfo.lastname} onChange={changeUserInfo} required />
                </div>
                <div className="input__container">
                    <label htmlFor="age">Edad madre</label>
                    <input type="text" id="age" name="age" value={userInfo.age} onChange={changeUserInfo} required />
                </div>

                {/*
            !logeado && (
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
                )          
    */}

                <div className="input__container">
                    <label htmlFor="email">Correo madre</label>
                    <input type="email" name="email" id="email" value={userInfo.email} onChange={changeUserInfo} required />
                </div>

                {tipo === "embarazo" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="birthmom">Fecha de nacimiento de la madre</label>
                            <input type="text" id="birthmom" name="birthmom" value={dataEmbarazo.birthmom} onChange={changeEmbarazo} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthdate">Fecha estimada del parto</label>
                            <input type="text" id="birthdate" name="birthdate" value={dataEmbarazo.birthdate} onChange={changeEmbarazo} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtype">Tipo de embarazo (simple / múltiple)</label>
                            <input type="text" id="birthtype" name="birthtype" value={dataEmbarazo.birthtype} onChange={changeEmbarazo} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="momheight">Estatura de la madre en cm (opcional)</label>
                            <input type="text" id="momheight" name="momheight" value={dataEmbarazo.momheight} onChange={changeEmbarazo} />
                        </div>
                        <div className="input__container">
                            <label htmlFor="momweight">Peso de la madre en kg (opcional)</label>
                            <input type="text" id="momweight" name="momweight" value={dataEmbarazo.momweight} onChange={changeEmbarazo} />
                        </div>
                        <div className="input__container">
                            <label htmlFor="pregnantbefore">He estado embarazada antes (sí / no)</label>
                            <input type="text" id="pregnantbefore" name="pregnantbefore" value={dataEmbarazo.pregnantbefore} onChange={changeEmbarazo} />
                            
                        </div>
                    </>
                }

                {tipo === "bebe" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="namebaby">Nombre del bebé</label>
                            <input type="text" id="namebaby" name="namebaby" value={dataBebe.namebaby} onChange={changeBebe} />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthbaby">Fecha de nacimiento del bebé</label>
                            <input type="text" name="birthbaby" value={dataEmbarazo.birthbaby} onChange={changeBebe} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtypebaby">Tipo de parto (natural / cesárea)</label>
                            <input type="text" name="birthtype" id="birthtype" value={dataBebe.birthtype} onChange={changeBebe}/>
                        </div>
                        <div className="input__container">
                            <label htmlFor="babyheight">Estatura del bebé en cm (opcional)</label>
                            <input type="text" id="babyheight" name="babyheight" value={dataBebe.babyheight} onChange={changeBebe}/>
                        </div>
                        <div className="input__container">
                            <label htmlFor="babyweight">Peso del bebé en kg (opcional)</label>
                            <input type="text" id="babyweight" name="babyweight" value={dataBebe.babyweight} onChange={changeBebe} />
                        </div>
                    </>
                }

                {tipo === "postparto" &&
                    <>
                        <div className="input__container">
                            <label htmlFor="lastbirthdate">Fecha último parto</label>
                            <input type="text" id="lastbirthdate" name="lastbirthdate" value={dataPostparto.lastbirthdate} onChange={changePostparto} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="birthtype">Tipo de parto</label>
                            <input type="text" id="birthtype" name="birthtype" value={dataPostparto.birthtype} onChange={changePostparto} required />
                        </div>
                        <div className="input__container">
                            <label htmlFor="babyheight">Estatura del bebé en cm (opcional)</label>
                            <input type="text" id="babyheight" name="babyheight" value={dataPostparto.babyheight} onChange={changePostparto} />
                        </div>
                        <div className="input__container">
                            <label htmlFor="babyweight">Peso del bebé en kg (opcional)</label>
                            <input type="text" id="babyweight" name="babyweight" value={dataPostparto.babyweight} onChange={changePostparto} />
                        </div>
                        <div className="input__container">
                            <label htmlFor="pregnantbefore">He estado embarazada antes (sí / no)</label>
                            <input type="checkbox" id="pregnantbefore" name="pregnantbefore" value={dataPostparto.pregnantbefore} onChange={changePostparto} />
                        </div>
                    </>
                }


                {question &&
                    (<div className="contenedorpagar__pregunta">
                        {tipo === "embarazo" &&
                            (
                                <>
                                    <label htmlFor="question">¿Cuál es su pregunta?</label>
                                    <input type="text" name="question" id="question" value={dataEmbarazo.question} onChange={changeEmbarazo} /></>
                            )
                        }
                        {tipo === "bebe" &&
                            (
                                <>
                                    <label htmlFor="question">¿Cuál es su pregunta?</label>
                                    <input type="text" name="question" id="question" value={dataBebe.question} onChange={changeBebe} /></>
                            )
                        }

                        {tipo === "postparto" &&
                            (
                                <>
                                    <label htmlFor="question">¿Cuál es su pregunta?</label>
                                    <input type="text" name="question" id="question" value={dataPostparto.question} onChange={changePostparto} /></>
                            )
                        }


                    </div>
                    )}

                <div className="input__container-save">
                    <input type="checkbox" name="save_data" />
                    <p >Autorizo que guarden mis datos para futuras consultas.</p>
                </div>
                <div className="pagar__buton-container">
                    <Checkout />
                    {
                        /*
<button
                        type="button"
                        onClick={() => {
                            //procesar el pago
                            

                            //luego de procesar el pago, hacer esto
                            if(tipo === "embarazo"){
                                enviarInfo(userInfo, dataEmbarazo);
                            }else if(tipo === "bebe"){
                                enviarInfo(userInfo, dataBebe);
                            }else if(tipo === "postparto"){
                                enviarInfo(userInfo, dataPostparto);
                            }
                        }}
                    >
                        Ir a pagar ${precio} US
                    </button>
                        */
                    }

                </div>

            </form>
            {state && <div className="overlay__fondo"></div>}
        </>
    )
}

export default FormularioPago