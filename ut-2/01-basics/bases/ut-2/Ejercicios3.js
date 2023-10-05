const PERSONA = {
    Nombre: 'Pablo',
    Edad: 25,
    hobbies: ['jugar', 'correr', 'programar'],
    direccion: {
      calle: 'Calle la maltesa 35',
      ciudad: 'Málaga' 
    },
    trabajo: {
      empresa: 'Burguer king',
      puesto: 'repartidor'
    }
  };
  
  //1.Una función que devuelva todas las claves del objeto. ¿Qué tipo de objeto devuelve?
  const claves = Object.keys(PERSONA); 

  
  //2.Una función que devuelva todos los valores del objeto. ¿Qué tipo de objeto devuelve?
  const valores = Object.values(PERSONA);