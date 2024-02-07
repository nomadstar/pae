import { useEffect, useState } from "react"
import Checkout from "../../components/epayco/Checkout"
import "./styleform.css"

const FormularioPago = ({ login, registrarse, agregarAutomaticaUsuario, title, question, precio, setLogin, userInfo, changeUserInfo, changeState, tipo, dataEmbarazo, dataPostparto, dataBebe, changeEmbarazo, changeBebe, changePostparto, estaLogeado }) => {

    const [verificado, setVerificado] = useState(false);
    const [textoCodigo, setTextoCodigo] = useState("");
    const [styleText, setStyleText] = useState("style__text-black");
    const [cuppon, setCuppon] = useState("");

    const canjearCodigo = async () => {
        setStyleText("style__text-black")
        setTextoCodigo("Verificando código...");

        setTimeout(() => {
            // Aquí iría tu lógica de llamada al backend y recibir respuesta
            //la variable del cuppon se llama: cuppon
            //debes cambiar con setVerificado cuando se verifique

            if (verificado) {
                setStyleText("style__text-blue");
                setTextoCodigo("¡Código aprobado!");
            } else {
                setStyleText("style__text-red");
                setTextoCodigo("Código no aprobado.");
            }
        }, 500);
    };

    //funcion que verifica si es que no ha llegado algo o hay algun error
    const [messageError, setMessageError]  = useState("");

    useEffect(() => {
        const token = localStorage.getItem('miToken');

        console.log("Trying!")
        console.log("Logeado es: ",login)

        if (token) {
            //agregar Info automática al usuario: email, name, lastname, age
            agregarAutomaticaUsuario("email", localStorage.getItem('email'));
            agregarAutomaticaUsuario("name", localStorage.getItem('name'));
            agregarAutomaticaUsuario("lastname", localStorage.getItem('lastname'));
            agregarAutomaticaUsuario("age", localStorage.getItem('age'));
        }
    }, [login])

    return (
        <form className="teleconsulta_pay">
            <div className="pagar__container-second">
                <h3 className="h3_teleconsulta">{title}</h3>
                <b onClick={()=>{
                    changeState();
                    setLogin(false);
                }}>&times;</b>
            </div>

            {
                !estaLogeado && (
                    <div className="input__container">
                <label htmlFor="name">Nombre madre</label>
                <input type="text" id="name" name="name" value={userInfo.name} onChange={changeUserInfo} required />
            </div>
                )
            }
            {
                !estaLogeado && (
                    <div className="input__container">
                <label htmlFor="lastname">Apellido madre</label>
                <input type="text" id="lastname" name="lastname" value={userInfo.lastname} onChange={changeUserInfo} required />
            </div>
                )
            }
            {
                !estaLogeado && (
                    <div className="input__container">
                <label htmlFor="age">Edad madre</label>
                <input type="text" id="age" name="age" value={userInfo.age} onChange={changeUserInfo} required />
            </div>
                )
            }

            {
                !estaLogeado && (
                    <div className="input__container">
                <label htmlFor="email">Correo madre</label>
                <input type="email" name="email" id="email" value={userInfo.email} onChange={changeUserInfo} required />
            </div>
                )
            }

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
                        <input type="text" name="birthtype" id="birthtype" value={dataBebe.birthtype} onChange={changeBebe} />
                    </div>
                    <div className="input__container">
                        <label htmlFor="babyheight">Estatura del bebé en cm (opcional)</label>
                        <input type="text" id="babyheight" name="babyheight" value={dataBebe.babyheight} onChange={changeBebe} />
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
                                <h4 className="title__pregunta" >¿Cuál es su pregunta?</h4>
                                <input type="text" name="question" placeholder="Ingrese su pregunta" id="question" value={dataEmbarazo.question} onChange={changeEmbarazo} /></>
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

            {
                /*
                <div className="input__container-save">
                <input type="checkbox" name="save_data" />
                <p >Autorizo que guarden mis datos para futuras consultas.</p>
                </div>
                */
            }
            <div className="codigo__container">
                <h5>Código de invitación</h5>
                <input
                    type="text"
                    name="code"
                    id="code"
                    value={cuppon}
                    onChange={(e) => setCuppon(e.target.value)}
                />
                <button type="button" onClick={canjearCodigo}>Canjear código</button>
                <p className={styleText}>{textoCodigo}</p>
            </div>
            <div className="pagar__buton-container">
                <p>Vas a pagar un total de <b>${verificado ? 0 : precio}</b></p>
                <p style={{textDecoration: "underline", fontSize: ".9rem"}}>Elige tu método de pago: </p>
                <Checkout precio={verificado ? 0 : precio} title={title} tematica={tipo} dataSend={tipo === "embarazo" ? dataEmbarazo : (tipo === "bebe" ? dataBebe : dataPostparto)} userInfo={userInfo} question={question} />
                {
                    //botón de Transbank
                }
            </div>
        </form>
    )
}

export default FormularioPago