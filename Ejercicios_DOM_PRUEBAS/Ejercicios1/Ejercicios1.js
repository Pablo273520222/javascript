const BODY = document.body;
const HEADER = document.createElement("header")
const H1 = document.createElement("h1");
const SECTION = document.createElement("section");
const DIV = document.createElement("div");
const DIV1 = document.createElement("div");
const DIV2= document.createElement("div");
const DIV3 = document.createElement("div");
const DIV4 = document.createElement("div");
const DIV5 = document.createElement("div");
const DIV6 = document.createElement("div");
const DIV7 = document.createElement("div");
const FIGURE = document.createElement("figure");
const IMG = document.createElement("img");
const FIGURE2 = document.createElement("figure");
const IMG1 = document.createElement("img");


SECTION.setAttribute("class", "botones");
DIV.setAttribute("class", "boton");
DIV.setAttribute("onclick", "toggle()");
DIV1.setAttribute("class", "boton");
DIV1.setAttribute("onclick", "cambiar()");
DIV2.setAttribute("class", "boton");
DIV2.setAttribute("onclick", "crearDiv()");
DIV3.setAttribute("class", "boton");
DIV3.setAttribute("onclick", "borrarDiv()");
DIV4.setAttribute("class", "boton");
DIV4.setAttribute("onclick", "fuentesImg()");
DIV5.setAttribute("class", "boton");
DIV5.setAttribute("onclick", "intercalar()");
H1.setAttribute("id", "titular");
H1.setAttribute("onclick", "toggle()");
DIV6.setAttribute("id", "subtitulo");
DIV6.setAttribute("style", "text-align:center");
DIV7.setAttribute("class", "paneles");
FIGURE.setAttribute("onclick", "ponerPie(this)");
IMG.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAJwsK5tFK5m6ZBiPk1-86nlNXD2c-8VYT7w&usqp=CAU)");
IMG.setAttribute("width", "33");
IMG.setAttribute("height", "75");
IMG.setAttribute("alt", "Número 1");
FIGURE2.setAttribute("onclick", "ponerPie(this)");
IMG1.setAttribute("src", "https://img.freepik.com/fotos-premium/numero-dos_2227-160.jpg");
IMG1.setAttribute("width", "50");
IMG1.setAttribute("height", "75");
IMG1.setAttribute("alt", "Número 2");

DIV.textContent = "Abrir - cerrar";
DIV1.textContent = "Cambiar titulo";
DIV2.textContent = "Crear bloque";
DIV3.textContent = "Borrar Bloque";
DIV4.textContent = "Fuentes";
DIV5.textContent = "Subtitulo";
DIV6.textContent = "Página de muestra de javascript dhtml";


H1.textContent = "Hola mundo";

BODY.appendChild(SECTION);
SECTION.appendChild(DIV);
SECTION.appendChild(DIV1);
SECTION.appendChild(DIV2);
SECTION.appendChild(DIV3);
SECTION.appendChild(DIV4);
SECTION.appendChild(DIV5);
BODY.appendChild(HEADER);
HEADER.appendChild(H1);
BODY.appendChild(DIV6);
BODY.appendChild(DIV7);
DIV7.appendChild(FIGURE);
FIGURE.appendChild(IMG);
DIV7.appendChild(FIGURE2);
FIGURE2.appendChild(IMG1);