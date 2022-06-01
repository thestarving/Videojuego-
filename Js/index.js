import {obtenerCanciones} from './servicioGenerarCanciones.js'
import {pintarCanciones} from './pintarCanciones.js'

let canciones = await obtenerCanciones()

pintarCanciones(canciones)
