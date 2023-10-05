const DEFAULT_DAY = "Número de día inválido";

/** Crear una función que devuelva los días de la semana en función de un número dado, haciendo uso de switch case
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekSC = (day) => {
    switch(day) {
        case 1: 
          return "Lunes";
        case 2:
          return "Martes"; 
        case 3:
          return "Miércoles";
        case 4:
          return "Jueves";
        case 5: 
          return "Viernes";
        case 6:
          return "Sábado";
        case 7:
          return "Domingo";
        default:
          return DEFAULT_DAY;
      }
};

/** Crear una objeto que devuelva los días de la semana en función de un número dado, haciendo uso de un objeto literal
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 */
let dayOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

/** Crear una función que haciendo uso del objeto literal definido arriba
 * devuelva los días de la semana en función de un número dado
 * 1 -> Lunes
 * 2 -> Martes
 * 3 -> Miércoles
 * 4 -> Jueves
 * 5 -> Viernes
 * 6 -> Sábado
 * 7 -> Domingo
 * Cualquier otra opción -> DEFAULT_DAY
 */
export const getDayOfWeekObject = (day) => {
  if (dayOfWeek.hasOwnProperty(day)) {
    return dayOfWeek[day];
} else {
    return DEFAULT_DAY;
}
};

/************************************************ */

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Crea un calculadora básica que sume, reste, multiplique y divide. Usando switch case
 * Operadores validos ("+", "-", "*", "/")
 * En cualquier otro caso debe devolver DEFAULT_OPERARTOR_ERROR
 */
export const simpleCalculatorSC = (operartor, num_1, num_2) => {
  let result;

  switch (operartor) {
    case "+":
      result = num_1 + num_2;
      break;
    case "-":
      result = num_1 - num_2;
      break;
    case "*":
      result = num_1 * num_2;
      break;
    case "/":
      if (num_2 !== 0) {
        result = num_1 / num_2;
      } else {
        return "No se puede dividir por cero";
      }
      break;
    default:
      result = DEFAULT_OPERARTOR_ERROR;
  }

  return result;
};

/**
 * Crea un objeto con los operadores básicos +, -, *, ,/
 * Cada propieda del objeto debe realizar la operación correspodiente
 */
let calculatorObject = {
"+": (num_1, num_2) => num_1 + num_2,
"-": (num_1, num_2) => num_1 - num_2,
"*": (num_1, num_2) => num_1 * num_2,
"/": (num_1, num_2) => {
  if (num_2 !== 0) {
    return num_1 / num_2;
  } else {
    return "No se puede dividir por cero";
  }
},
};

/**
 * Crea una función que haga uso de objeto que has creado arriba y que además devuelva DEFAULT_OPERARTOR_ERROR
 * si se introduce cualquier cosa que sea diferente a "+", "-", "*", "/"
 *
 */
export const simpleCalculatorObject = (operartor, num_1, num_2) => {
  const operation = calculatorObject[operartor];

  if (operation) {
    return operation(num_1, num_2);
  } else {
    return DEFAULT_OPERARTOR_ERROR;
  }
};
