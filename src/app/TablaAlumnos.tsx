'use client'
import { obtenerAlumnos } from '@/Firebase/Promesas'
import { IAlumno } from '@/Interfaces/IAlumno'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const TablaAlumnos = () => {
    const [IAlumnos, setLAlumnos] = useState<IAlumno[]>([])
    const handleObtenerTodo = ()=>{
        obtenerAlumnos().then(
            (alumnos)=>{
                console.log(alumnos);
                setLAlumnos(alumnos);
            }).catch(
                (e)=>{
                    console.log("Error")
                })
    }
    useEffect(()=>{
        handleObtenerTodo();
    },[])
  return (
    <>
    <Table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Accion</th>    
            </tr>
        </thead>
        <tbody>
            {
             IAlumnos.map((alumno)=>{return (
               <tr>
                 <td>{alumno.nombre}</td>
                 <td>{alumno.apellido}</td>
                 <td>{alumno.edad}</td>
                 <td>{alumno.correo}</td>
                 <td>
                    <Button variant='warning'>Actualizar</Button>
                    <Button variant='danger'>Eliminar</Button>
                 </td>
                </tr>
                
            )})
            }
        </tbody>
    </Table>

       {
        IAlumnos.map((alumno)=>{return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
              <Card.Text>
                <h6>Datos</h6>
                <p>Edad:{alumno.edad}</p>
              </Card.Text>
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Eliminar</Button>
            </Card.Body>
          </Card>
        )})
    }

    </> 
  )
}
export default TablaAlumnos