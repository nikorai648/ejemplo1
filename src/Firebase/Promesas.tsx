import { IAlumno } from "@/Interfaces/IAlumno";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
export const registrarAlumno = async(alumno:IAlumno)=>{
   
    const docRef = await addDoc(collection(db, "alumno"), alumno);

}