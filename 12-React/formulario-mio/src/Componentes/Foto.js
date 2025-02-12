import React from 'react'

export default function Foto({esChico, onClick}) {
    let url;
    
    if(esChico){
        url="/imagenes/perro-cactus.jpg";
    } else {
        url="/imagenes/perro-traje.jpg";
    }
    return (
        <>
            <img src={url} onClick={onClick} alt='Foto perros'/>
        </>
    )
}
