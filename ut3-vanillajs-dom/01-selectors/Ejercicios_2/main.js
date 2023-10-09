document.addEventListener("DOMContentLoaded", function () {
    const BODY = document.body;
    const IMG = document.createElement("img");
    const H1 = document.createElement("h1");
    const P = document.createElement("p");
    const P1 = document.createElement("p");
  
    IMG.src = "./assests/img_la.jpg";
    IMG.alt = "Logo Javascript";
  
    
  
    H1.textContent = 'This is a Heading';
    P.textContent = 'This is a paragraph.';
    P1.textContent = 'This is another paragraph.';
    
    BODY.appendChild(IMG);
    BODY.appendChild(H1);
    BODY.appendChild(P);
    BODY.appendChild(P1);
  });
  