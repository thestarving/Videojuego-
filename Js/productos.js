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
    columna.classList.add("col")

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
    boton.classList.add("text-center", "btn-info")
    boton.textContent=producto.boton
    

    tarjeta.appendChild(titulo)
    tarjeta.appendChild(foto)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})
