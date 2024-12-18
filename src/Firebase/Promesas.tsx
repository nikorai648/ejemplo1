import { IAlumno } from "@/Interfaces/IAlumno";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"; 
import { db } from "./Firebase";
export const registrarAlumno = async(alumno:IAlumno)=>{
   
    const docRef = await addDoc(collection(db, "alumno"), alumno);
}
export const obtenerAlumnos = async ()=>{
    const querySnapshot = await getDocs(collection(db, "alumno"),);
    let alumnos:IAlumno[] = [] 
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  let alumno:IAlumno = {
    nombre:doc.data()['nombre'],
    apellido: doc.data()['apellido'],
    edad: doc.data()['edad'],
    correo: doc.data()['correo']
  }
  alumnos.push(alumno);
});
return alumnos;
}