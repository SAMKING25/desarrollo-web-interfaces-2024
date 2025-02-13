import React from "react";
import Seleccionar from "./Seleccionar";

export default function Famosos({manejarClick, nombre,apellido,color,precio}) {
    const guardarDatos = (e) => {
        manejarClick(nombre,apellido,precio)
        e.target.parentNode.style.display="none";
    }
    return (
        <div style={{backgroundColor:color, width:200, margin:"10px", padding:"20px"}}>
            {nombre} {apellido}
            <br /><br />
            <Seleccionar onClick={guardarDatos} />
        </div>
    )
}
