export function pintarCanciones(canciones){

    let fila=document.getElementById("fila")

    canciones.items.forEach(function(cancion){
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
}