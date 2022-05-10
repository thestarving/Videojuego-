import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

//referencia al nombre de usuario o avatar 
//referncia al boton de salir 

let avatar=document.getElementById("username")
let botonsalir=document.getElementById("botonsalir")
let botonlogin=document.getElementById("btnlogin")


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("Usuario autenticado "+user.email)
    avatar.textContent=user.email
    avatar.classList.remove("invisible")
    botonlogin.classList.add("invisible")

    //Rutina de salida
    botonsalir.addEventListener("click", function(evento){

      signOut(auth).then(() => {
        // Sign-out successful.
        avatar.classList.add("invisible")
        botonlogin.classList.remove("invisible")
        window.location=href="index.html"

      }).catch((error) => {
        // An error happened.
      });

    })
    // ...
  } else {
    // User is signed out
    // ...
    console.log("Sin autenticar")
  }
});