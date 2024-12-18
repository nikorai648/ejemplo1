'use client'
import { iSAlumno } from '@/InitialStates/ISAlumno'
import React, { useState } from 'react'

export const FormularioAlumnoFinal=() => {
    const[alumno,setAlumno] = useState(iSAlumno)
    const handleAlumno = (estado:string,valor:string)=>{
        if(estado=="nombre" || estado=="apellido" || estado=="edad" || estado=="correo"){
        setAlumno({...alumno,[estado]:valor})
        }
    }
    const handleRegistrar = ()=>{
      console.log("le diste al boton")
      alert("Vas a registrar")
      console.log(alumno)
    
    }

  return (
    <>
    <h1>Formulario Final</h1>
    <p>Nombre:{alumno.nombre}</p>
    <p>Apellido:{alumno.apellido}</p>
    <p>Edad:{alumno.edad}</p>
    <p>Correo:{alumno.correo}</p>
    <form>
        <label>Nombre</label><br></br>
        <input type='text' placeholder='Ingrese nombre'
              name='nombre'
        onClick={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br/>
        <label>Apellido</label><br></br>
        <input type='text' placeholder='Ingrese Apellido'
              name='apellido'
        onClick={(e)=>{{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}}/><br/>
        <label>Edad</label><br></br>
        <input type='number' placeholder='Ingrese Edad'
              name='edad'
        onClick={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br/>
        <label>Correo</label><br/>
        <input type='email' placeholder='Ingrese correo'
              name='correo'
        onClick={(e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)}}/><br/>
        <button type='button'
        onClick={handleRegistrar}>Registrar</button>
    </form>
    </>
  )
}
export default FormularioAlumnoFinal