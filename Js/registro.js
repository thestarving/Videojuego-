import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

//Rutina para email y password 
//activando la rutina de registro 

let botonregistro=document.getElementById("botonregistro")
let ModalRegistro=new bootstrap.Modal(document.getElementById('mensajeInformativo'))
let textoModal1=document.getElementById("mensajeModalInfo111")

botonregistro.addEventListener("click", function(event){
    
    event.preventDefault()

    //Capturar el valor escrito en la caja correo 
    let email=document.getElementById("email").value

    //Capturar el escrito en la caja contraseña 
    let password=document.getElementById("password").value

    console.log(email,password)

    //Activar la rutina de firebase para el registro 

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Éxito en el registro")
    textoModal1.textContent="Éxito en el registro"
    ModalRegistro.show()
    let formulario=document.getElementById("formularioRegistro")
    formulario.reset()
    setTimeout(function(){
        ModalRegistro.hide()
    },2000)
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Fallo"+errorMessage)
    textoModal1.textContent="Fallamos "+errorMessage
    let formulario=document.getElementById("formularioRegistro")
    formulario.reset()
    ModalRegistro.show()
    setTimeout(function(){
        ModalRegistro.hide()
    },2000)
    // ..
    });
});



