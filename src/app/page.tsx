import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <h1>Hola</h1>
    <p
     style={{backgroundColor:'red'}} >
      Come estas</p>
    <input type="checkbox"
     className="PintarAzul"
    />
    </>
  );
}
