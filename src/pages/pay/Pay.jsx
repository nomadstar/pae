import { useState } from "react"
import logo from "../../assets/logo.webp"
import images from "../../assets/sintoms"
import { FaCheckCircle } from "react-icons/fa"
import FormularioPago from "./FormularioPago"
import { SintomasMadre, SintomasBebe, SintomasPostparto } from './Sintomas'
import "../pages.css"

const Pay = () => {
  const [temaConsulta, setTemaConsulta] = useState("");

  const handleTemaConsultaChange = (event) => {
    setTemaConsulta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (temaConsulta === "") {
      alert("Debes seleccionar una opción antes de enviar el formulario.");
      return;
    }
  };

  const [state1, setState1] = useState(false);
  const changeState1 = () => {
    setState1(!state1);
  };

  const [state2, setState2] = useState(false);
  const changeState2 = () => {
    setState2(!state2);
  };

  return (
    <main className="begin__main">
      
      {state1 && <FormularioPago precio="3" title="Pregunta" question={true} state={state1} changeState={changeState1}/>}
      {state2 && <FormularioPago precio="20" title="Teleconsulta" question={false} state={state2} changeState={changeState2}/>}

      <form onSubmit={handleSubmit} className="begin__form-container">
        <div className="begin__logo-container">
          <div>
          <h5 style={{fontSize: "3rem"}}>Pregúntale al Experto</h5>
          <p style={{textAlign: "center", marginTop: "1rem"}}>Realiza tu teleconsulta rápidamente</p>
          </div>
        </div>
        <div className="begin__form-container-1">
          <div className="begin__form uno">
            <article className="begin__form--content">
            <h2 className="titulo">Escoge el tipo de consulta</h2>
            </article>

          <div className="contenedor-imagenes">
          <div className="sintomas_container-content1">
              <label htmlFor="opcion1">Embarazo</label>
              <div className="begin__form-image">
                <img src={images.s1} alt="sintoma 1" />
              </div>
              <input
                type="radio"
                id="opcion1"
                name="opciones"
                value="embarazo"
                checked={temaConsulta === "embarazo"}
                onChange={handleTemaConsultaChange}
              />
            </div>

            <div className="sintomas_container-content1">
              <label htmlFor="opcion2">Bebé</label>
              <div className="begin__form-image">
                <img src={images.s2} alt="sintoma 2" />
              </div>
              <input
                type="radio"
                id="opcion2"
                name="opciones"
                value="bebe"
                checked={temaConsulta === "bebe"}
                onChange={handleTemaConsultaChange}
              />
            </div>

            <div className="sintomas_container-content1">
              <label htmlFor="opcion3">Mamá postparto</label>
              <div className="begin__form-image">
                <img src={images.s3} alt="sintoma 3" />
              </div>
              <input
                type="radio"
                id="opcion3"
                name="opciones"
                value="postparto"
                checked={temaConsulta === "postparto"}
                onChange={handleTemaConsultaChange}
              />
            </div>
          </div>
          </div>

          <div className="dos"> 
            <article className="begin__form--content">
              <div>
              <h2>¿Qué sintomas presentas?</h2>
              </div>
            </article>
              {temaConsulta === "embarazo" && <SintomasMadre />}
              {temaConsulta === "bebe" && <SintomasBebe />}
              {temaConsulta === "postparto" && <SintomasPostparto />}
          </div>
        </div>

        <div className="begin__form-2">
          <div>
            <h2 style={{textAlign: "center", fontSize: "2.3rem"}}>Tipo de consulta</h2>
          </div>

          <div className="option__container">
            <div className="begin__form-option">
              <h3>Pregúntale al Doctor</h3>
              <p>
                <FaCheckCircle className="circle_check" /> Respuesta en menos de 2 horas.
              </p>
              <p>
                <FaCheckCircle className="circle_check" /> Pedíatras, ginecólogos, médicos especialistas
                en el embarazo.
              </p>
              <div className="begin__final-buton">
                <button onClick={changeState1} type="button">
                  Realizar pregunta por $3 US
                </button>
                <div className="cuppon-container">
                  <p>Tengo un código de invitación</p>
                  <input type="text" />
                </div>
                <button onClick={changeState2} type="button">
                  Usar código
                </button>
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
                  Realizar teleconsulta por $20 US
                </button>
                <div className="cuppon-container">
                  <p>Tengo un código de invitación</p>
                  <input type="text" />
                </div>
                <button onClick={changeState2} type="button">
                  Usar código
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Pay;
