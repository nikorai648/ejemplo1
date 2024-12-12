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

  return (
    <>
    <p>Nombre:{alumno.nombre}</p>
    <p>Apellido:{alumno.apellido}</p>
    <p>Edad:{alumno.edad}</p>
    <p>Correo:{alumno.correo}</p>
    <form>
        <label>Nombre</label><br></br>
        <input type='text' placeholder='Ingrese nombre'
        onClick={(e)=>{setNombre(e.currentTarget.value)}}/><br/>
        <label>Apellido</label><br></br>
        <input type='text' placeholder='Ingrese Apellido'
        onClick={(e)=>{setApellido(e.currentTarget.value)}}/><br/>
        <label>Edad</label><br></br>
        <input type='number' placeholder='Ingrese Edad'
        onClick={(e)=>{setEdad(e.currentTarget.valueAsNumber)}}/><br/>
        <label>Correo</label><br/>
        <input type='email' placeholder='Ingrese correo'
        onClick={(e)=>{setCorreo(e.currentTarget.value)}}/><br/>
        <button type='button'>Registrar</button>
    </form>
    </>
  )
}
export default FormularioAlumnoFinal