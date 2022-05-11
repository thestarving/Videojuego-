import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let botonlogin=document.getElementById("botonlogin")

botonlogin.addEventListener("click", function(evento){
    evento.preventDefault()


    //recibir el correo y la conntraseña 

    let email=document.getElementById("emaillogin").value
    let password=document.getElementById("passwordlogin").value


    //activar la rutina de login firebase 
    const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href="index.html"
            // ...
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    });

})