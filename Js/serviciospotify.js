//Consumiendo el api de spotify 

//1. Crear una variable para almacenar la URI del servicio 
const URI='https://api.spotify.com/v1/albums/3GsMRN0kkCeLDo0Fgi75wh/tracks?market=US&limit=10&offset=5'

//2. Configuro la petición 
const TOKEN='Bearer BQA0HL6JBNafsP8-KnlZwKCa9uPS9qb6_hvZLvRHvu00wdcIXbdWNISs3ZBiEio3zz4Zv3gaSlILeTmZXTx-26looZaJZ4PBYzUERpWwNrtVBzkV1gfNJh2ALgB3iOdSN_rrTO87MhtCZVP-cY3nwI9tb9e3uIIXE58'

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
    respuesta.items.forEach(function(cancion){
        console.log(cancion.preview_url)
    })
})
.catch(function(respuesta){
    console.log(respuesta)
})