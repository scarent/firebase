import { registrarpersona } from "./promesas.js";

window.addEventListener("load",()=>{
    document.getElementById("btnregistrar").addEventListener("click",registrar)
});
const registrar = ()=>{   //variable flecha para gatillar una funcion
    //recupero el elemento
    let enombre = document.getElementById("nombre");
    let eapellido = document.getElementById("apellido");
    let efechanac = document.getElementById("fecha_nacimiento");
    let erut = document.getElementById("rut");
    let ecorreo = document.getElementById("correo");
    //recupero el valor
    let vnombre= enombre.value;
    let vapellido = eapellido.value;
    let vfechanac = efechanac.value;
    let vrut = erut.value;
    let vcorreo = ecorreo.value;
    //creo el objeto
    let objeto = {nombre:vnombre};
    let objetoap = {apellido:vapellido};
    let objetofecha = {fecha:vfechanac};
    let objetorut = {rut:vrut};
    let objetocorr = {correo:vcorreo}
    console.log(objeto);
    //validacion del objeto
    registrarpersona(objeto).then(()=>{
        alert("registrado con éxito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    });
    registrarpersona(objetoap).then(()=>{
        alert("registrado con exito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    })
    registrarpersona(objetofecha).then(()=>{
        alert("registrado con exito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    })
    registrarpersona(objetorut).then(()=>{
        alert("registrado con exito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    })
    registrarpersona(objetocorr).then(()=>{
        alert("registrado con exito");
    }).catch((r)=>{
        alert("algo ocurrio");
        alert(r);
    })

}