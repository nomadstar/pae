import { FaStar } from 'react-icons/fa'

const DoctorCard = ({ nombre, pais, especialidad, fotoClass }) => (
    <div className="card__container">
        <div className={`pro__image-container ${fotoClass}`}></div>
        <div className='card__content'>
            <h4>{nombre}</h4>
            <div className='stars__container'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <p>{pais}</p>
            <p>{especialidad}</p>
        </div>
    </div>
);

const DoctoresContainer = ({ profesionales, foto }) => (
    <>
        {profesionales.map((pro, index) => (
            <DoctorCard
                key={index}
                nombre={pro.nombre}
                pais={pro.pais}
                especialidad={pro.especialidad}
                fotoClass={foto ? `ct${index + 1}` : 'ctX'}
            />
        ))}
    </>
);

const DoctoresV = () => {
    //nombre, pais, especialidad
    const profesionalesV = [
        {
            nombre: "Susan Martinez Lozada",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra"
        },
        {
            nombre: "Gina Cristina Guayacan Mora",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra"
        },
        {
            nombre: "Carlos Valasquez",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra"
        },
        {
            nombre: "Andrés Felipe Jimenez",
            pais: "Colombia, Villavicencio",
            especialidad: "Pediatra"
        }
    ]
    return <DoctoresContainer profesionales={profesionalesV} foto={true} />
}

const DoctoresNV = () => {
    const profesionalesNV = [
        {
            nombre: "Daniel Rojas",
            pais: "Colombia, Facatativa",
            especialidad: "Pediatra",
        },
        {
            nombre: "Henry Cabrera",
            pais: "Chile",
            especialidad: "Pediatra",
        },
        {
            nombre: "Paola Cruz",
            pais: "Colombia, Popayan",
            especialidad: "Pediatra",
        },
        {
            nombre: "Carla del Valle Cárdenas",
            pais: "Colombia, Pereira",
            especialidad: "Pediatra",
        },
        {
            nombre: "Dario Botero",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra",
        },
        {
            nombre: "Amparo Diaz",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra",
        },
        {
            nombre: "Maria Alejandra Montaño",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra",
        },
        {
            nombre: "Eliana Ocampo",
            pais: "Colombia, Monteira",
            especialidad: "Pediatra",
        },
        {
            nombre: "Maritza Franco López",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra",
        },
        {
            nombre: "Carolina Ibañez",
            pais: "Chile, Santiago",
            especialidad: "Pediatra",
        },
        {
            nombre: "Carlos Sánchez",
            pais: "Colombia, Cartagena",
            especialidad: "Pediatra",
        },
        {
            nombre: "Yira Torres",
            pais: "Colombia, Bogotá",
            especialidad: "Pediatra",
        }
    ]

    return <DoctoresContainer profesionales={profesionalesNV} foto={false} />
}


export { DoctoresV, DoctoresNV }
