import React from 'react'

export default function Saludar({ setMostrarMensaje, comparar }) {
    const mostrar = () => {
        comparar();
        setMostrarMensaje(true);
    }
    return (
        <>
            <button onClick={mostrar}>Saludar</button>
        </>
    )
}
