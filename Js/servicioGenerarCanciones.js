import {generarToken} from './serviciospotify.js'

//llamar a la función generarToken
let tokenRespuesta=await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`

//URI DEL SERVICIO
const URI='https://api.spotify.com/v1/albums/3GsMRN0kkCeLDo0Fgi75wh/tracks?market=US&limit=10&offset=5'

//CONFIGURO LA PETICION
const PETICION={
    method:"GET",
    headers:{Authorization:token}
}

//Consumo el servicio 
export async function obtenerCanciones(){
    let respuesta=await fetch(URI,PETICION)
    return respuesta.json()
}