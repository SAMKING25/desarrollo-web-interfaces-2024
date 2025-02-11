import React, { useState } from 'react';

export default function Formulario({comparar}) {
    const comprobar = () => {
        {comparar()}
    }

    const [num,setNum] = useState();

    const modificar = (e) => {
        setNum(e)
    }
    return (
        <div className="guess-section">
            <input onChange={modificar} type="number" id="guess" placeholder="Número" min="1" max="20" />
            <button onclick="comprobar()">Check!</button>
        </div>
    )
}
