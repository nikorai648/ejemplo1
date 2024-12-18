'use client'
import { obtenerAlumnos } from '@/Firebase/Promesas'
import React, { useEffect } from 'react'

export const TablaAlumnos = () => {
    const handleObtenerTodo = ()=>{
        obtenerAlumnos().then(
            (alumnos)=>{
                console.log(alumnos);
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
        <tbody></tbody>
    </table>

    </>
  )
}
export default TablaAlumnos