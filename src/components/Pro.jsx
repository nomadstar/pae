import { useState } from "react"
import { IoIosAddCircle, IoIosRemoveCircleOutline } from "react-icons/io"
import { DoctoresV, DoctoresNV } from "./Pros"

const Pro = () => {
    const [showMore, changeShowMore] = useState(false);
    const changeShow = () => {
        changeShowMore(!showMore);
      };
    
    return (
        <div className='pro__container' id='pros'>
            <div className='pro__title'>
                <h3>Nuestros profesionales</h3>
            </div>
            <div className='cards__container'>
                <DoctoresV />
                {showMore && (
                    <DoctoresNV />
                )}
                {showMore && (<div className='card__button-oculto botonmenos'>
                    <button type='button' onClick={changeShow}>
                        <IoIosRemoveCircleOutline />
                    </button>
                    Ver menos
                </div>)}
                {(!showMore) && (<div className='card__button-oculto'>
                    <button type='button' onClick={changeShow}>
                        <IoIosAddCircle />
                    </button>
                    Ver más
                </div>)}
            </div>
        </div>
    )
}

export default Pro