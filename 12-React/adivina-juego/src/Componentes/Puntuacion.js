import React from 'react'
import Mensaje from './Mensaje'
import LineaPuntuacion from './LineaPuntuacion'


export default function Puntuacion({msj, punt, puntMas}) {
  return (
    <div>
        <div className="score-section">
            <br/>
            <Mensaje msj = {msj}/>  
            <br/>
            <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero={punt}/>
            <LineaPuntuacion etiqueta="Puntuaje Alto:" id="highscore" numero={puntMas}/>
        </div>
    </div>
  )
}