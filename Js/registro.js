import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

//Rutina para email y password 
//activando la rutina de registro 

let botonregistro=document.getElementById("botonregistro")

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
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Fallo"+errorMessage)
    // ..
    });
})