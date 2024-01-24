import { useState } from "react"
import logo from "../../assets/logo.webp"
import { FaCheckCircle } from "react-icons/fa"
import FormularioPago from "./FormularioPago"
import { SintomasMadre, SintomasBebe, SintomasPostparto } from './Sintomas'
import "./pages.css"

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
      
      {state1 && <FormularioPago precio="3" title="Pregunta" question={true} />}
      {state2 && <FormularioPago precio="20" title="Teleconsulta" question={false} />}

      <form onSubmit={handleSubmit} className="begin__form-container">
        <div className="begin__logo-container">
          <img src={logo} alt="logo" />
          <h5>Pregúntale al Experto</h5>
          <p>Realiza tu teleconsulta rápidamente</p>
        </div>
        <div className="begin__form-container-1">
          <div className="begin__form uno">
            <h2>Temática</h2>
            <p>Seleccione una opción: </p>

            <div>
              <label htmlFor="opcion1">Embarazo</label>
              <input
                type="radio"
                id="opcion1"
                name="opciones"
                value="embarazo"
                checked={temaConsulta === "embarazo"}
                onChange={handleTemaConsultaChange}
              />
            </div>

            <div>
              <label htmlFor="opcion2">Bebé</label>
              <input
                type="radio"
                id="opcion2"
                name="opciones"
                value="bebe"
                checked={temaConsulta === "bebe"}
                onChange={handleTemaConsultaChange}
              />
            </div>

            <div>
              <label htmlFor="opcion3">Mamá postparto</label>
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

          <div className="begin__form dos">
            <h2>Síntomas</h2>
            <p>Luego, seleccione síntomas: </p>
            <div>
              {temaConsulta === "embarazo" && <SintomasMadre />}
              {temaConsulta === "bebe" && <SintomasBebe />}
              {temaConsulta === "postparto" && <SintomasPostparto />}
            </div>
          </div>
        </div>

        <div className="begin__form-2">
          <h2>Tipo de consulta</h2>

          <div className="begin__form-cuppon">
            <label>Tengo un código de descuento: </label>
            <input id="codigo_descuento" type="text" name="codigo_descuento" />
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
              </div>
            </div>
          </div>
        </div>
      </form>
      {(state1 || state2) && <div className="overlay__fondo"></div>}
    </main>
  );
};

export default Pay;
