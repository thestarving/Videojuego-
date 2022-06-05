function llenarTienda() {

    let productosBD=[
        {foto:'Assets/img/acolchadonegrorainbow.jpg', nombre:"Acolchado Negro Rainbow Six", precio:"120000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisablancarainbow.jpg', nombre:"Camisa Blanca Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisablancoynegrorainbow.jpg', nombre:"Camisa Blanca y Negra Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisadegradadorainbow.jpg', nombre:"Camisa Degradado Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisagrisrainbow.jpg', nombre:"Camisa Gris Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisamujerrainbow.jpg', nombre:"Camisa Mujer Logo Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/hoddiegris.jpg', nombre:"Hoddie Gris Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisanegradoradarainbow.jpg', nombre:"Camisa Negra Logo Dorado Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisanegrarainbow.jpg', nombre:"Camisa Negra Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/camisanegrazofiarainbow.jpg', nombre:"Camisa Negra Zofia Rainbow Six", precio:"20000", boton:"Mostrar Producto"},
        {foto:'Assets/img/gorranegrarainbow.jpg', nombre:"Gorra Negra Rainbow Six", precio:"15000", boton:"Mostrar Producto"},
        {foto:'Assets/img/gorrarojarainbow.jpg', nombre:"Gorra Roja Rainbow Six", precio:"15000", boton:"Mostrar Producto"},
        {foto:'Assets/img/hoddienegrodoradorainbow.jpg', nombre:"Hoddie Negro Dorado Rainbow Six", precio:"70000", boton:"Mostrar Producto"},
        {foto:'Assets/img/hoddienegrorainbow.jpg', nombre:"Hoddie Negro Rainbow Six", precio:"70000", boton:"Mostrar Producto"},
        {foto:'Assets/img/llaverorainbow.jpg', nombre:"Llavero Rainbow Six", precio:"8000", boton:"Mostrar Producto"},
        {foto:'Assets/img/mochilanegrarainbow.jpg', nombre:"Mochila Negra Rainbow Six", precio:"100000", boton:"Mostrar Producto"},
        {foto:'Assets/img/panelcuadrorainbow.jpg', nombre:"Panel Cuadro Rainbow Six", precio:"150000", boton:"Mostrar Producto"},
        {foto:'Assets/img/pindoradorainbow.jpg', nombre:"Pin Dorado Rainbow Six", precio:"5000", boton:"Mostrar Producto"},
        {foto:'Assets/img/relojrainbow.jpg', nombre:"Reloj Negro Rainbow Six", precio:"40000", boton:"Mostrar Producto"},
        {foto:'Assets/img/sudaderanegrarainbow.jpg', nombre:"Pantalones Negros Rainbow Six", precio:"50000", boton:"Mostrar Producto"}
    ]
    
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        console.log(producto)
    
        let columna=document.createElement("div")
        columna.classList.add("col","mt-4")
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre
    
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.classList.add("h-100")
        foto.src=producto.foto
    
        let precio=document.createElement("h5")
        precio.classList.add("text-center")
        precio.textContent=producto.precio
    
        let boton=document.createElement("button")
        boton.classList.add("text-center", "btn-info","btn")
        boton.textContent=producto.boton
        
    
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}

//creo un producto vacío 
let producto={}

llenarTienda()

//creando el modal info
let modalInfo = new bootstrap.Modal(document.getElementById('modalInfo'))
let modalCompra = new bootstrap.Modal(document.getElementById('resumenCompra'))

//rutina para ampliar informacion
let filaContenedora=document.getElementById("fila")
filaContenedora.addEventListener("click", function(evento){
    if(evento.target.classList.contains("btn")){
        producto=ampliarInformacionProducto(evento)
        console.log(producto)
        modalInfo.show()

        Inicializar()
    }
})

function ampliarInformacionProducto(evento){

    let producto={}

    producto.titulo=evento.target.parentElement.querySelector("h4").textContent
    producto.foto=evento.target.parentElement.querySelector("img").src
    producto.precio=evento.target.parentElement.querySelector("h5").textContent

    let titulo=document.getElementById("titulo")
    titulo.textContent=evento.target.parentElement.querySelector("h4").textContent

    let foto=document.getElementById("foto")
    foto.src=evento.target.parentElement.querySelector("img").src

    let precio=document.getElementById("precio")
    precio.textContent=evento.target.parentElement.querySelector("h5").textContent
    
    return producto
    
}

function Inicializar () {
    let cantidad=document.getElementById("cantidadProducto")
    cantidad.value="1"
}

//rutina para el añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito=document.getElementById("botonAdd")
botonAgregarCarrito.addEventListener("click", function(){


    //Debo capturar la canntidad y agregarla al producto 
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad
    

    producto.subtotal=producto.cantidad*Number(producto.precio)
    console.log(producto.subtotal);
    console.log(producto.cantidad);
    console.log(producto.precio);

    //Agrego los productos al carrito 
    carrito.push(producto)

    //Pintar la capsula en el carrito
    let suma=0
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    console.log(suma)
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")

    console.log(carrito)

    modalInfo.hide()

    Subtotal(1)

})

//Rutina para limpiar
let botonLimpiarCarrito=document.getElementById("botonLimpiar")
botonLimpiarCarrito.addEventListener("click", function(){
    Subtotal(0)
    carrito=[]
    convertir.textContent=""

    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})

//Rutina para ver carrito 
let botonVerCarrito=document.getElementById("verCarrito")
botonVerCarrito.addEventListener("click", function(){

    //Recorrer el carrito y pintar los productos 
    let base=document.getElementById("baseCarrito")

    base.innerHTML=""

    carrito.forEach(function(producto){

        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto=document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src=producto.foto

        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.titulo

        let precio=document.createElement("h5")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion

        let cantidad=document.createElement("p")
        cantidad.classList.add("text-center")
        cantidad.textContent=producto.cantidad

        let Subtotal = document.createElement("p")
        Subtotal.textContent="Subtotal: "+producto.subtotal
        Subtotal.classList.add("text-center")


        //PADRES E HIJOS
        columna1.appendChild(foto)
        columna2.appendChild(titulo)
        columna2.appendChild(precio)
        columna2.appendChild(descripcion)
        columna2.appendChild(cantidad)
        columna2.appendChild(Subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })

    modalCompra.show()
})

/*function Inicializar () {
    let cantidad=document.getElementById("cantidadProducto")
    cantidad.value="1"
}*/

let total
let subtotal=document.getElementById("subtotal")
function Subtotal (validar) {
    total=0

    carrito.forEach(function(producto){
        console.log(producto.precio)
        
        if(validar==1){
            total=total+(Number(producto.cantidad) * Number(producto.precio))
            subtotal.textContent=total
        }
        else {
            total=0
            subtotal.textContent=""
           
        }
    })
    
}

let convertir=document.getElementById("convertir")
let convertidor=document.getElementById("convertidor")

convertidor.addEventListener("click", function(){
    let pesos=total
    let dolares=pesos/3955

    convertir.textContent="Precio en dólares: "+dolares.toFixed(2)

})

