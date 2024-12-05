import React, { useState } from 'react'

export const FormularioAlumno = () => {
    const [nombre, setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [correo, setCorreo] = useState("")
  return (
    <>
    <form>
        <label>Nombre</label><br></br>
        <input type='text' placeholder='Ingrese nombre'/><br/>
        <label>Apellido</label><br></br>
        <input type='text' placeholder='Ingrese Apellido'/><br/>
        <label>Edad</label><br></br>
        <input type='number' placeholder='Ingrese Edad'/><br/>
        <label>Nombre</label><br/>
        <input type='email' placeholder='Ingrese correo'/><br/>
        <button type='button'>Registrar</button>
    </form>
    </>
  )
}
export default FormularioAlumno