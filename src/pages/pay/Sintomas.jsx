const SintomasContainer = ({ tipo, sintomas }) => {
    return (
        <article className="sintomas_container">
            {sintomas.map((sintoma, index) => (
                <div key={index}>
                    <label htmlFor={`${tipo}${index + 1}`}>{sintoma.label}</label>
                    <input
                        type="checkbox"
                        id={`${tipo}${index + 1}`}
                        name={`sintomas_${tipo}${index + 1}`}
                    />
                </div>
            ))}
        </article>
    );
};

const SintomasMadre = () => {
    const sintomas = [
        { label: 'Dolor de vientre' },
        { label: 'Calambre/Dolor de piernas' },
        { label: 'Dolor tren inferior' },
        { label: 'Otro' },
    ];

    return <SintomasContainer tipo="madre" sintomas={sintomas} />;
};

const SintomasBebe = () => {
    const sintomas = [
        { label: 'Estreñimiento' },
        { label: 'Congestión nasal / tos' },
        { label: 'Dolor de estomago' },
        { label: 'Otro' },
    ];

    return <SintomasContainer tipo="bebe" sintomas={sintomas} />;
};

const SintomasPostparto = () => {
    const sintomas = [
        { label: 'Dolor al amamantar' },
        { label: 'Destete' },
        { label: 'Rechazo del seno' },
        { label: 'Otro' },
    ];

    return <SintomasContainer tipo="postparto" sintomas={sintomas} />;
};

export { SintomasMadre, SintomasBebe, SintomasPostparto };
