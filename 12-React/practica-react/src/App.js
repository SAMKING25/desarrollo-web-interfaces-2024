import React, { useState } from "react";
import Mensaje from "./components/Mensaje";
import Famosos from "./components/Famosos";

function App() {
  const famosos = [
    {
      nombre: "Pablo",
      apellido: "Alboran",
      color: "red",
      precio: 100
    },
    {
      nombre: "Ana",
      apellido: "Mena",
      color: "purple",
      precio: 120
    },
    {
      nombre: "Abraham",
      apellido: "Mateo",
      color: "blue",
      precio: 150
    }
  ]
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);

  const manejarClick = (nuevoNombre, nuevoApellido, nuevoPrecio) => {
    if (nombre === "") {
      setNombre(nuevoNombre + " " + nuevoApellido);
    } else {
      setNombre(nuevoNombre+" "+nuevoApellido+", "+nombre);
    }
    setPrecio(nuevoPrecio + precio);
  }

  return (
    <>
      <Mensaje nombre={nombre} precio={precio} />
      <Famosos manejarClick={manejarClick} nombre={famosos[0].nombre} apellido={famosos[0].apellido} color={famosos[0].color} precio={famosos[0].precio} />
      <Famosos manejarClick={manejarClick} nombre={famosos[1].nombre} apellido={famosos[1].apellido} color={famosos[1].color} precio={famosos[1].precio} />
      <Famosos manejarClick={manejarClick} nombre={famosos[2].nombre} apellido={famosos[2].apellido} color={famosos[2].color} precio={famosos[2].precio} />
    </>
  );
}

export default App;
