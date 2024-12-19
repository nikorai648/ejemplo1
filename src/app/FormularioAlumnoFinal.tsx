'use client'
import { registrarAlumno } from '@/Firebase/Promesas'
import { iSAlumno } from '@/InitialStates/ISAlumno'
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      registrarAlumno(alumno).then(()=>{
            //then es para hacer algo si la promesa se cumple
            alert("Se registro")
      }).catch((e)=>{
            //catch si la promesa falla
            alert("Algo fallo")
      })
    
    }

  return (
    <>
    <h1>Formulario Final</h1>
    <p>Nombre:{alumno.nombre}</p>
    <p>Apellido:{alumno.apellido}</p>
    <p>Edad:{alumno.edad}</p>
    <p>Correo:{alumno.correo}</p>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="email" placeholder="Ingrese un nombre"
        name='nombre'
        onChange={((e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="email" placeholder="Ingrese un apellido"
        name='nombre'
        onChange={((e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edad</Form.Label>
        <Form.Control type="email" placeholder="Ingrese una edad"
        name='nombre'
        onChange={((e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Ingrese un correo"
        name='nombre'
        onChange={((e)=>{handleAlumno(e.currentTarget.name,e.currentTarget.value)})}
        />
      </Form.Group>

        <Button variant="primary" type="submit">Registrar</Button>
    </Form>
    </>
  )
}
export default FormularioAlumnoFinal