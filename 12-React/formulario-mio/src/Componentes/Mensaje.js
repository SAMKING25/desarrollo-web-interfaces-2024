import React from 'react'

export default function Mensaje({nombre, edad, categoria}) {
  return (
    <>
        <p>
            Hola {nombre}, tienes {edad} y eres {categoria}.
        </p>
    </>
  )
}
