const WELCOME = "Welcome to the application!";
const REPORTS = "This is an informational message.";
const WARNING = "This is warning. Be cautious.";
const ERROR = "Error! Something went wrong.";




const PERSONS1 = {name:"John", Age: 30, city:"New York"};
const PERSONS2 = {name:"Jane", Age: 25, city:"San Francisco"};
const PERSONS3 = {name:"Bob", Age: 40, city:"Chicago"};

console.log(`%c ${WELCOME}`, `color: blue; font-size: 18px; font-weight: bold;`);
console.log(`%c ${REPORTS}`, `color: green; font-size: 16px`);
console.warn(`%c ${WARNING}`, `font-size: 16px`)
console.error(`%c ${ERROR}`, `font-size: 16px`)
console.table([PERSONS1, PERSONS2, PERSONS3]);