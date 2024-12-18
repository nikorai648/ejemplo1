'use client'
import { obtenerAlumnos } from '@/Firebase/Promesas'
import { IAlumno } from '@/Interfaces/IAlumno'
import React, { useEffect, useState } from 'react'

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
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Correo</th>
            </tr>
        </thead>
        <tbody>
            {
             IAlumnos.map((alumno)=>{return (
               <tr>
                 <td>{alumno.nombre}</td>
                 <td>{alumno.apellido}</td>
                </tr>
                
            )})
            }
        </tbody>
    </table>

    </>
  )
}
export default TablaAlumnos