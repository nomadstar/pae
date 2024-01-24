import { FaQuoteLeft } from 'react-icons/fa';

const Comments = ({ comentarios }) => {
    return (
        <div className="comments__container">
            {comentarios.map(c => (
            <div className='comment__container' key={c.nombre}>
                <div className='image__container'>
                    <div className='image im1'></div>
                </div>
                <div className='c__container'>
                    <div className='ct__content'>
                        <FaQuoteLeft className='icon__comment' />
                        <p>{c.comentario}</p>
                    </div>
                    <div className='comment__name'>- {c.nombre}</div>
                </div>
            </div>
            ))}
        </div>
    )
}

const Comentarios = () => {
    const cms = [
        {
            nombre: "Yoselin",
            comentario: "Fue muy rápido, la verdad es que es muy fácil navegar por la página."
        },
        {
            nombre: "Ale Gomez",
            comentario: "Quedo muy satisfecha con la consulta, todo me gustó, la disposición del doctor y su explicación, me dejó tranquila."
        },
        {
            nombre: "Laura Beltran",
            comentario: "Tiene muchas opciones de posibles síntomas y es acertado con todos los datos. Es llamativo y fácil de entender."
        }
    ]

    return <Comments comentarios={cms} />;
};

export default Comentarios;