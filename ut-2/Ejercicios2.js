const  MESSAGE = "This is an alert message, click me to move on!!!";
const CONFIRM = "Show me in an alert if you clicked on ok or false";
const TRUE = "You clicked on true click me to move on!!!";
const FALSE = "You clicked on false click me to move on!!!";
const PROMPT_TYPE = "Show me in an alert the message typed";

alert([MESSAGE])

const DATOS = confirm(CONFIRM)

if (DATOS == true) {
    alert(TRUE);
    const DATOS = prompt(PROMPT_TYPE, "Type something");
} else {
    alert(FALSE);
    const DATOS = prompt(PROMPT_TYPE, "Type something"); /*En este caso Null porque le hemos dado cancelar los datos*/
}


if (DATOS == true) {
    const DATOS = prompt(PROMPT_TYPE);
    alert("You typed " + DATOS + " click me to move on!!!");
} else {
    const DATOS = prompt(PROMPT_TYPE);
    alert("You typed " + DATOS + " click me to move on!!!"); /*En este caso Null porque le hemos dado cancelar los datos*/
}