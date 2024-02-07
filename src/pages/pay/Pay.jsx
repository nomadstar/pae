import { useState, useEffect } from "react"
import Footer from "../../components/Footer"
import images from "../../assets/sintoms"
import { FaCheckCircle } from "react-icons/fa"
import FormularioPago from "./FormularioPago"
import Login from "../../components/login/Login"
import Register from "../../components/register/Register"
import { SintomasMadre, SintomasBebe, SintomasPostparto } from './Sintomas'
import "./pay.css"

const Aviso = ({ texto }) => {
  return (
    <div className="aviso__texto">
      <p style={{ textAlign: "center" }}>{texto}</p>
    </div>
  )
}

const Pay = () => {
  //info del usuario que se repite en todas las consultas
  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    age: "",
    email: "",
    type: "",
    sintoms: []
  })

  const agregarAutomaticaUsuario = (name, value) => {
    setUserInfo((prevData)=>{
      const newData = { ...prevData };
      newData[name] = value;

      return newData;
    })
  }

  //actualiza la informacion de usuario dependiendo
  const handleChangeUser = (e) => {
    const { name, value, checked, type } = e.target;

    setUserInfo((prevData) => {
      const newData = { ...prevData };

      if (type === "radio") {
        newData[name] = value;
        setTemaConsulta(e.target.value);
      } else if (type === "checkbox") {
        if (checked) {
          newData[name] = [...newData[name], value];
        } else {
          newData[name] = newData[name].filter((sintoma) => sintoma !== value);
        }
      } else {
        newData[name] = value;
      }

      return newData;
    });
  };
  //info extra de tipo embarazo
  const [dataEmbarazo, setDataEmbarazo] = useState({
    birthmom: "",
    birthdate: "",
    birthtype: "",
    momheight: "",
    momweight: "",
    pregnantbefore: "",
    question: ""
  });
  const handleChangeEmbarazo = (e) => {
    const { name, value } = e.target;

    setDataEmbarazo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //info extra de tipo bebe
  const [dataBebe, setDataBebe] = useState({
    namebaby: "",
    birthbaby: "",
    birthtype: "",
    babyheight: "",
    babyweight: "",
    question: ""
  });
  const handleChangeBebe = (e) => {
    const { name, value } = e.target;

    setDataBebe((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(dataBebe)
  };
  //info extra de tipo postparto
  const [dataPostparto, setDatapostparto] = useState({
    lastbirthdate: "",
    birthtype: "",
    babyheight: "",
    babyweight: "",
    pregnantbefore: "",
    question: ""
  });
  const handleChangePostparto = (e) => {

    const { name, value } = e.target;

    setDatapostparto((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [select, setSelect] = useState(false);
  const [form1, setForm1] = useState(true);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);

  //debe cambiarse, si ya está logeado y tiene token, poner true.
  const [logeado, setLogeado] = useState(false);
  //la variable logeado debe depender del token
  useEffect(() => {
    // Al cargar la página, verifica si hay un token en el localStorage
    const token = localStorage.getItem('miToken');

    console.log('Token en localStorage:', token);

    if (token) {
      // Aquí puedes realizar una llamada al servidor para validar el token si es necesario
      // Si el token es válido, establece logeado en true, de lo contrario, en false
      // En este ejemplo, simplemente establecemos logeado en true si hay un token
      setLogeado(true);
      console.log("Se ha modificado el logeado, tiene un token")
    }
  }, []); // El array vacío asegura que useEffect solo se ejecute una vez al cargar la página


  //mostrar o no contenedor de login
  const [login, setLogin] = useState(true);

  const changeSelected = () => {
    setSelect(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form1) {
      etapa1();
    } else if (form2) {
      etapa2();
    }
  };
  const closeLogin = () => {
    setLogin(false);
  }
  const etapa1 = (e) => {
      setForm1(false);
      setForm2(true);
  }
  const volveretapa1 = () => {
    setForm1(true);
    setForm2(false);
  }
  const etapa2 = (e) => {
    setForm2(false);
    setForm3(true);
  }
  const volveretapa2 = () => {
    setForm2(true);
    setForm3(false);
  }

  const [temaConsulta, setTemaConsulta] = useState("");

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  //abrir formulario, es necesario revisar el login antes
  const changeState1 = () => {
    setState1(!state1)

    if (logeado) {
      setState1(!state1)
    } else {
      setLogin(true)
    }
  };
  const changeState2 = () => {
    setState2(!state2);
    if (logeado) {
      setState2(!state2)
    } else {
      setLogin(true)
    }
  };

  const [invitado, setInvitado] = useState(false);

  const [registrarse, setRegistrarse] = useState(false);

  const openLogin = () => {
    setLogin(true);
    setRegistrarse(false);
  }

  const openRegister = () => {
    setLogin(false);
    setRegistrarse(true);
  }

  const [nickname, setNickName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('miToken');
    if (token) {
      setNickName(localStorage.getItem('username'));
    }
  }, [form1, form2, form3, login])

  return (
    <main className="begin__main">
      {(state1) && <FormularioPago login={login} registrarse={registrarse} agregarAutomaticaUsuario={agregarAutomaticaUsuario} userInfo={userInfo} changeUserInfo={handleChangeUser} precio="3" title="Pregunta para la consulta" question={true} state={state1} changeState={changeState1} logeado={logeado} tipo={temaConsulta} dataEmbarazo={dataEmbarazo} dataBebe={dataBebe} dataPostparto={dataPostparto} changeEmbarazo={handleChangeEmbarazo} changeBebe={handleChangeBebe} changePostparto={handleChangePostparto} setLogin={setLogin} estaLogeado={logeado} />}

      {(state2) && <FormularioPago agregarAutomaticaUsuario={agregarAutomaticaUsuario} userInfo={userInfo} changeUserInfo={handleChangeUser} precio="20" title="Teleconsulta" question={false} state={state2} changeState={changeState2} logeado={logeado} tipo={temaConsulta} dataEmbarazo={dataEmbarazo} dataBebe={dataBebe} dataPostparto={dataPostparto} changeEmbarazo={handleChangeEmbarazo} changeBebe={handleChangeBebe} changePostparto={handleChangePostparto} setLogin={setLogin} estaLogeado={logeado} />}

      {
        ((!state1 && !state2) && <form className="begin__form-container" onSubmit={handleSubmit}>
          <div className="begin__logo-container">
            <div>
              <h5 style={{ fontSize: "3rem" }}>Pregúntale al Experto</h5>
              <p style={{ textAlign: "center", marginTop: "1rem" }}>Realiza tu teleconsulta rápidamente</p>
            </div>
          </div>

          {form1 && (
            <div className="begin__form-container-1">
              <div className="begin__form uno">

                <article className="begin__form--content">
                  <h2 className="titulo">Escoge el tipo de consulta</h2>
                </article>

                <div className="contenedor-imagenes">
                  <div className="sintomas_container-content1">
                    <label htmlFor="opcion1">Embarazo</label>
                    <div className="begin__form-image">
                      <img style={{ cursor: "pointer" }} src={images.s1} alt="sintoma 1" />
                    </div>
                    <input
                      type="radio"
                      id="opcion1"
                      name="type"
                      value="embarazo"
                      checked={temaConsulta === "embarazo"}
                      onChange={handleChangeUser}
                    />
                  </div>

                  <div className="sintomas_container-content1">
                    <label htmlFor="opcion2">Bebé</label>
                    <div className="begin__form-image">
                      <img style={{ cursor: "pointer" }} src={images.s2} alt="sintoma 2" />
                    </div>
                    <input
                      type="radio"
                      id="opcion2"
                      name="type"
                      value="bebe"
                      checked={temaConsulta === "bebe"}
                      onChange={handleChangeUser}
                    />
                  </div>

                  <div className="sintomas_container-content1">
                    <label htmlFor="opcion3">Mamá postparto</label>
                    <div className="begin__form-image">
                      <img style={{ cursor: "pointer" }} src={images.s3} alt="sintoma 3" />
                    </div>
                    <input
                      type="radio"
                      id="opcion3"
                      name="type"
                      value="postparto"
                      checked={temaConsulta === "postparto"}
                      onChange={handleChangeUser}
                    />
                  </div>
                </div>
              </div>
              <div className="button-next">
                <button onClick={etapa1}>Siguiente</button>
              </div>
            </div>)
          }

          {
            form2 && (
              <div className="dos">
                <article className="begin__form--content">
                  <div>
                    <h2>¿Qué sintomas presentas?</h2>
                  </div>
                </article>
                {temaConsulta === "embarazo" && <SintomasMadre json={userInfo} changeState={handleChangeUser} />}
                {temaConsulta === "bebe" && <SintomasBebe json={userInfo} changeState={handleChangeUser} />}
                {temaConsulta === "postparto" && <SintomasPostparto json={userInfo} changeState={handleChangeUser} />}
                <div className="button-next flex mt-8 gap-4">
                  <button onClick={etapa2}>Siguiente</button>
                  <button onClick={volveretapa1}>Volver</button>
                </div>
              </div>
            )
          }

          {
            form3 && (
              <div className="begin__form-2">
                          {
                nickname !== "" ? (<div className="text-center mt-2">
                  <div>Logeado con <b>{nickname}</b></div>
                  <button className="close__sesion-button" onClick={() => {
                  localStorage.removeItem('miToken');
                  window.location.reload();
                }}>Cerrar sesión</button>
                </div>) : (<div className="text-center mt-2">
                  <button className="close__sesion-button" onClick={
                  () => {
                    setLogin(true);
                  }
                }>Iniciar sesión</button>
                </div>)             
              }
                <div>
                  <h2 style={{ textAlign: "center", fontSize: "2.3rem" }}>Tipo de consulta</h2>
                </div>

                <div className="option__container">
                  <div className="begin__form-option">
                    <h3>Pregúntale al Doctor</h3>
                    <p>
                      <FaCheckCircle className="circle_check" /> Respuesta en menos de 3 horas
                    </p>
                    <p>
                      <FaCheckCircle className="circle_check" /> Médicos especialistas
                    </p>
                    <div className="begin__final-buton">
                      <button onClick={changeState1} type="button">
                        Quiero una pregunta
                      </button>
                      {
                        /*
                          <div className="cuppon-container">
                        <p>Tengo un código de invitación</p>
                        <input type="text" />
                      </div>
                      <button onClick={changeState1} type="button">
                        Usar código
                      </button>
                        */
                      }
                    </div>
                  </div>

                  <div className="begin__form-option">
                    <h3>Teleconsulta</h3>
                    <p>
                      <FaCheckCircle className="circle_check" /> Teleconsulta de 15 minutos.
                    </p>
                    <p>
                      <FaCheckCircle className="circle_check" /> Expertos en el área para responder sus dudas.
                    </p>
                    <div className="begin__final-buton">
                      <button onClick={changeState2} type="button">
                        Quiero una teleconsulta
                      </button>
                    </div>
                  </div>
                </div>
                <div className="button-next">
                  <button onClick={volveretapa2}>Volver</button>
                </div>
              </div>

              
            )
          }

          

          {
            (login && !logeado && form3) && (
              <>
                <Login state={login} changeState={closeLogin} setInvitado={setInvitado} setLogeado={setLogeado} openRegister={openRegister} />
                <div className="begin__main-overlay"></div>
              </>
            )
          }
          {
            registrarse && (
              <>
                <Register state={registrarse} openLogin={openLogin} changeLogin={setLogin} setRegistrarse={setRegistrarse} />
                <div className="begin__main-overlay"></div>
              </>
            )
          }
        </form>)
      }

      <script type="text/javascript" src="https://checkout.epayco.co/checkout.js" />
      <Footer estilo="pay__footer" />
    </main>
  );
};

export default Pay;
