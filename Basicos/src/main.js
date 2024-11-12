//seleccion de elementos del DOM
const appDiv = document.getElementById('app');

appDiv.innerText = "Hola mundo";
appDiv.innerHTML = "<h1>Hola Mundo</h1>";

//añadir clases a un elemento
appDiv.classList.add("clase1","clase2");

// Seleccion de ClassName
const items = document.getElementsByClassName("items");
// items.length;
let n = 0;
for (const i of items) {
    // i.textContent=`Hola amigo ${++n}`;
    i.innerText=`Hola amigo ${++n}`;

}


// Selección por clase
const saludoP = document.querySelector(".saludo");
//traer todos por clase
const saludos = document.querySelectorAll(".saludo")

saludos.forEach((saludo,index) =>{
    saludo.innerText = `Hola mundo ${index}`;

})

const miGit = document.getElementById("github");
miGit.setAttribute("target", "_blank");
miGit.innerText = "ir a mi GitHub";
miGit.textContent = "ir a mi GitHub";