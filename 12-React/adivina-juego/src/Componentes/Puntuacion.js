import React from 'react';
import Mensaje from './Mensaje';
import LineaPuntuacion from './LineaPuntuacion';

export default function Puntuacion() {
    return (
        <div className="score-section">
            <br />
            <Mensaje/>
            <br />
            <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero="20"/>
            <LineaPuntuacion etiqueta="Puntaje Alto:" id="highscore" numero="0"/>
        </div>
    )
}
