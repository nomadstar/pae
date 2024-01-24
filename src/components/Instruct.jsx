const Instruct = ({image, texto}) => {
    return (
        <div className="app__header-diagram__content">
            <img src={image} alt="instruccion" />
            <p>{texto}</p>
        </div>
    )
}

export default Instruct