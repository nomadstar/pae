import { useState } from 'react'

const Cupones = () => {
    const [codigo, setCodigo] = useState("");

    const enviar = () => {
        //enviar código de descuento
        console.log(codigo);
    }

    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-xl font-semibold'>Crear código de descuento</h2>
            <div className='flex gap-3'>
                <input
                    className='input__cuppon'
                    type="text"
                    name='codigo'
                    id='codigo'
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />
                <button className='button__cuppon' onClick={enviar}>Crear</button>
            </div>
        </div>
    )
}

export default Cupones