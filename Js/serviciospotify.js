//1. URI (Para dónde voy?)

const URI="https://accounts.spotify.com/api/token"

//2. Almaceno los datos que voy a enviar 

let dato1='client_id=373335a1289f49f3b6759bcbc71cb7a2'
let dato2='client_secret=7f4eab375c4b4ef7955c56a3744f3b26'
let dato3='grant_type=client_credentials'

//3. Configuro la petición 
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Consumir el servicio
export async function generarToken(){
    
    let respuesta= await fetch(URI,PETICION)
    return(respuesta.json())
}

/*/3. Intento consumir el API
fetch(URI,PETICION)
.then(function(respuesta){
    return (respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    //Respuesta de spotify server 
    console.log(respuesta.items)
    //recorriendo el arreglo 
    
    let fila=document.getElementById("fila")

    respuesta.items.forEach(function(cancion){
        console.log(cancion.preview_url)


        //Traversing
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let nombre=document.createElement("p")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src="https://firebasestorage.googleapis.com/v0/b/thestarvingvideojuego-9dd2b.appspot.com/o/fondobso.jpg?alt=media&token=322e1316-9372-47b9-81e9-af187ca85b21"

        let numero=document.createElement("p")
        numero.classList.add("text-center")
        numero.textContent="Track Number: "+cancion.track_number


        //Padres e hijos 
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(numero)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})*/