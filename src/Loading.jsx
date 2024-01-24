import logo from "./assets/logo.webp"

const Loading = () => {
    return (
        <div className="load__container">
            <div>
                <img src={logo} alt="logo" />
                <h1>Cargando...</h1>
                <p>Pregúntale al Experto</p>
            </div>
        </div>
    );
};

export default Loading;
