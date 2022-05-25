//Consumiendo el api de spotify 

//1. Crear una variable para almacenar la URI del servicio 
const URI='https://api.spotify.com/v1/albums/3GsMRN0kkCeLDo0Fgi75wh/tracks?market=US&limit=10&offset=5'

//2. Configuro la petición 
const TOKEN='Bearer BQDDA682Y2bCsK7MYYupmAMkITRqOSKY7KNXE9BV2DpZGDfBG9_bbxLVwi92iyGFF5L5noDLTIJK53_wjcekeYlRfWK5RwXkdBl13nNCQri3_eoB8LEwu7PqMmPLOV1T5d8MuqKQLLsX3tkQRld7ORo80ZpaDw3PUrk'

const PETICION={
    method:"GET", 
    headers:{Authorization:TOKEN}
}

//3. Intento consumir el API
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
})