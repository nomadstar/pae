import images from "../../assets/sintoms";

const SintomasContainer = ({ tipo, sintomas, changeState }) => {
    return (
        <article className="contenedor">
            {sintomas.map((sintoma, index) => (
                <div className="sintomas_container-content" key={index}>
                    <label htmlFor={`${tipo}${index + 1}`}>{sintoma.label}</label>
                    <div>
                        <img src={sintoma.image} alt="sintoma 3" />
                    </div>
                    <input
                        type="checkbox"
                        id={`${tipo}${index + 1}`}
                        name={"sintoms"}
                        value={sintoma.label}
                        onChange={changeState}
                    />
                </div>
            ))}
        </article>
    );
};

const SintomasMadre = ({changeState}) => {
    const sintomas = [
        { label: 'Dolor de vientre', image: images.mama1 },
        { label: 'Calambre/Dolor de piernas', image: images.mama2  },
        { label: 'Dolor tren inferior', image: images.mama3  },
        { label: 'Otro', image: images.mama4  },
    ];

    return <SintomasContainer tipo="madre" sintomas={sintomas} changeState={changeState}/>;
};

const SintomasBebe = ({changeState}) => {
    const sintomas = [
        { label: 'Estreñimiento', image: images.bebe1 },
        { label: 'Congestión nasal / tos', image: images.bebe2 },
        { label: 'Dolor de estomago', image: images.bebe3 },
        { label: 'Otro', image: images.otro },
    ];

    return <SintomasContainer tipo="bebe" sintomas={sintomas} changeState={changeState} />;
};

const SintomasPostparto = ({changeState}) => {
    const sintomas = [
        { label: 'Dolor al amamantar', image: images.postparto1 },
        { label: 'Destete', image: images.postparto2 },
        { label: 'Rechazo del seno', image: images.postparto3  },
        { label: 'Otro', image: images.otro  },
    ];

    return <SintomasContainer tipo="postparto" sintomas={sintomas} changeState={changeState} />;
};

export { SintomasMadre, SintomasBebe, SintomasPostparto };
