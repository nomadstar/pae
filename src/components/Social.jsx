import React from 'react';
import red_1 from "../assets/red1.png";
import red_2 from "../assets/red2.png";
import red_3 from "../assets/red3.png";
import red_4 from "../assets/red4.png";

const Social = () => {
    return (
        <div className='flex gap-2 justify-center items-center'>
            <a href="/">
                <img className='w-12' src={red_1} alt="red social 1" />
            </a>
            <a href="/">
                <img className='w-12' src={red_2} alt="red social 2" />
            </a>
            <a href="/">
                <img className='w-12' src={red_3} alt="red social 3" />
            </a>
            <a href="/">
                <img className='w-12' src={red_4} alt="red social 4" />
            </a>
        </div>
    )
}

export default Social