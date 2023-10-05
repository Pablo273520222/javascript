const TITULO = document.getElementById("titulo");
const PARRAFO = document.getElementsByClassName("parrafo");
const NOMBRE = document.getElementsByName("nombre");
const APELLIDO = document.getElementsByName("apellido");
const ELEMENTO = document.getElementsByTagName("li");
const TITULO1 = document.querySelector("#titulo");
const PARRAFO1 = document.querySelectorAll(".parrafo");


console.log(TITULO.innerHTML + "-> get via getElementById");
console.log(PARRAFO[0].innerHTML + "-> get via getElementsByClassName");
console.log(PARRAFO[1].innerHTML + "-> get via getElementsByClassName");
console.log(NOMBRE[0].name + "-> get via getElementsByName");
console.log(APELLIDO[0].name + "-> get via getElementsByName");
console.log(ELEMENTO[0].innerHTML + "-> get via getElementsByTagName");
console.log(ELEMENTO[1].innerHTML + "-> get via getElementsByTagName");
console.log(ELEMENTO[2].innerHTML + "-> get via getElementsByTagName");
console.log(TITULO1.innerHTML + "-> get via querySelector");
console.log(PARRAFO1[0].innerHTML + "-> get via querySelectorAll");
console.log(PARRAFO1[1].innerHTML + "-> get via querySelectorAll");