import React from 'react'

export default function LineaPuntuacion({etiqueta, id, numero}) {
  return (
    <>
        <p>{etiqueta} <span id={id}>{numero}</span></p>
    </>
  )
}
