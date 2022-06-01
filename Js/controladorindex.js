import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


//referencia al nombre de usuario o avatar 
//referncia al boton de salir 

let avatar=document.getElementById("username")
let botonsalir=document.getElementById("botonsalir")
let botonlogin=document.getElementById("btnlogin")

let botontienda=document.getElementById("tienda")
let botonmusica=document.getElementById("musica")


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("Usuario autenticado "+user.email)
    avatar.textContent=user.email
    avatar.classList.add("d-block")
    avatar.classList.remove("d-none")
    botonlogin.classList.add("invisible")
    botontienda.classList.remove("invisible")
    botonmusica.classList.remove("invisible")

    //Rutina de salida
    botonsalir.addEventListener("click", function(evento){

      signOut(auth).then(() => {
        // Sign-out successful.
        avatar.classList.add("d-none")
        avatar.classList.remove("d-block")
        botonlogin.classList.remove("invisible")
        botontienda.classList.add("invisible")
        botonmusica.classList.add("invisible")
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