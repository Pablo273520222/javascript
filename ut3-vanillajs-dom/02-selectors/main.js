const body = document.body; 

// Creamos los elementos

const IMG = document.createElement('img');
const H1 = document.createElement('h1');
const P1 = document.createElement('p');
const P2 = document.createElement('p');

IMG.src = "./assets/img_la.jpg";
IMG.alt = "LA";

// Añadimos el contenido de texto
H1.textContent = 'This is a Heading';
P1.textContent = 'This is a paragraph'; 
P2.textContent = "This is a another paragraph"

// Vamos construyendo el DOM
body.appendChild(IMG);
body.appendChild(H1);
body.appendChild(P1);
body.appendChild(P2);