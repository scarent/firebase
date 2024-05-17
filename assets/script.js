import { registrarpersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar)
});
const registrar = ()=>{   //variable flecha para gatillar una funcion
    //recupero el elemento
    let enombre = document.getElementById("nombre");
    //recupero el valor
    let vnombre= enombre.value;
    //creo el objeto
    let objeto = {nombre:vnombre};
    console.log(objeto);
    registrarpersona(objeto);
    

}