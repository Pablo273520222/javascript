const BODY = document.body;

const DIV = document.createElement("div");
const H1 = document.createElement("h1");
const BR1 = document.createElement('br');
const P = document.createElement("p");
const BR2 = document.createElement('br');
const FORM = document.createElement("form");
const LABEL = document.createElement("label");
const INPUT = document.createElement("input");
const BR3 = document.createElement('br');
const BR4 = document.createElement('br');
const LABEL1 = document.createElement("label");
const INPUT1 = document.createElement("input");
const BR5 = document.createElement('br');
const BR6 = document.createElement('br');
const LABEL2 = document.createElement("label");
const INPUT2 = document.createElement("input");
const BR7 = document.createElement('br');
const BR8 = document.createElement('br');
const INPUTSUBMIT = document.createElement('input');


    LABEL.setAttribute('for', 'datemax');
    INPUT.setAttribute('type', 'date');
    INPUT.setAttribute('id', 'datemax');
    INPUT.setAttribute('name', 'datemax');
    INPUT.setAttribute('max', '1979-12-31');

    LABEL1.setAttribute('for', 'datemin');
    INPUT1.setAttribute('type', 'date');
    INPUT1.setAttribute('id', 'datemin');
    INPUT1.setAttribute('name', 'datemin');
    INPUT1.setAttribute('max', '2000-01-02');

    LABEL2.setAttribute('for', 'quantity');
    INPUT2.setAttribute('type', 'number');
    INPUT2.setAttribute('id', 'quantity');
    INPUT2.setAttribute('name', 'quantity');
    INPUT2.setAttribute('min', '1');
    INPUT2.setAttribute('max', '5');

    INPUTSUBMIT.setAttribute('type', 'submit');
    INPUTSUBMIT.setAttribute('value', 'Submit');



FORM.action = "/action_page.php"



H1.textContent = "The input min and max attributes";
P.textContent = "The min and max attributes specify the minimum and maximum values for an input element";
LABEL.textContent = "Enter a date before 1980-01-01:";
LABEL1.textContent = "Enter a date after 2000-01-01:";
LABEL2.textContent = "Quantity (between 1 and 5):";



BODY.appendChild(DIV);
DIV.appendChild(H1);
DIV.appendChild(BR1);
DIV.appendChild(P);
DIV.appendChild(BR2);
DIV.appendChild(FORM);

FORM.appendChild(LABEL);
FORM.appendChild(INPUT);
FORM.appendChild(BR3);
FORM.appendChild(BR4);
FORM.appendChild(LABEL1);
FORM.appendChild(INPUT1);
FORM.appendChild(BR5);
FORM.appendChild(BR6);
FORM.appendChild(LABEL2);
FORM.appendChild(INPUT2);
FORM.appendChild(BR7);
FORM.appendChild(BR8);
FORM.appendChild(INPUTSUBMIT);