document.addEventListener("DOMContentLoaded", function () {
    const BODY = document.body;
    const DIV = document.createElement('div');
    const H1 = document.createElement('h1');
    const BR1 = document.createElement('br');
    const P = document.createElement('p');
    const BR2 = document.createElement('br');
    const FORM = document.createElement('form');
    const LABEL1 = document.createElement('label');
    const INPUT1 = document.createElement('input');
    const BR3 = document.createElement('br');
    const BR4 = document.createElement('br');
    const LABEL2 = document.createElement('label');
    const INPUT2 = document.createElement('input');
    const BR5 = document.createElement('br');
    const BR6 = document.createElement('br');
    const LABEL3 = document.createElement('label');
    const INPUT3 = document.createElement('input');
    const BR7 = document.createElement('br');
    const BR8 = document.createElement('br');
    const INPUTSUBMIT = document.createElement('input');

    LABEL1.setAttribute('for', 'datemax');
    INPUT1.setAttribute('type', 'date');
    INPUT1.setAttribute('id', 'datemax');
    INPUT1.setAttribute('name', 'datemax');
    INPUT1.setAttribute('max', '1979-12-31');

    LABEL2.setAttribute('for', 'datemin');
    INPUT2.setAttribute('type', 'date');
    INPUT2.setAttribute('id', 'datemin');
    INPUT2.setAttribute('name', 'datemin');
    INPUT2.setAttribute('max', '2000-01-02');

    LABEL3.setAttribute('for', 'quantity');
    INPUT3.setAttribute('type', 'number');
    INPUT3.setAttribute('id', 'quantity');
    INPUT3.setAttribute('name', 'quantity');
    INPUT3.setAttribute('min', '1');
    INPUT3.setAttribute('max', '5');

    INPUTSUBMIT.setAttribute('type', 'submit');
    INPUTSUBMIT.setAttribute('value', 'Submit');

    H1.textContent = "The input min and max attributes";
    P.textContent = "The min and max attributes specify the minimum and maximum values for an input element.";
    LABEL1.textContent = "Enter a date before 1980-01-01:";
    LABEL2.textContent = "Enter a date after 2000-01-01:";
    LABEL3.textContent = "Quantity (between 1 and 5):";

    DIV.appendChild(H1);
    DIV.appendChild(BR1);
    DIV.appendChild(P);
    DIV.appendChild(BR2);
    DIV.appendChild(FORM);

    FORM.appendChild(LABEL1);
    FORM.appendChild(INPUT1);
    FORM.appendChild(BR3);
    FORM.appendChild(BR4);
    FORM.appendChild(LABEL2);
    FORM.appendChild(INPUT2);
    FORM.appendChild(BR5);
    FORM.appendChild(BR6);
    FORM.appendChild(LABEL3);
    FORM.appendChild(INPUT3);
    FORM.appendChild(BR7);
    FORM.appendChild(BR8);
    FORM.appendChild(INPUTSUBMIT);

    BODY.appendChild(DIV);
});
