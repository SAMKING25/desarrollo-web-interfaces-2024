import React from 'react'

export default function Nombre({label, value, onChange}) {
    const modificar = (e) => {
        onChange(e.target.value)
    }

  return (
    <div>
        <label>{label}</label>
        <input type={'text'} value={value} onChange={modificar} />
    </div>
  )
}
