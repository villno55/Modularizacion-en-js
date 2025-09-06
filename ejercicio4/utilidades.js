export function nivRiesgo(edad, enfermedades) {
  let estadoEnfermedad;
  if (enfermedades === true) {
    estadoEnfermedad = "sí tiene enfermedades";
  } else {
    estadoEnfermedad = "no tiene enfermedades";
  }

  if (edad > 60 || enfermedades === true) {
    return `Alto riesgo (edad: ${edad}, ${estadoEnfermedad})`;
  } else if (edad >= 40 && edad <= 60 && enfermedades === true) {
    return `Riesgo moderado (edad: ${edad}, ${estadoEnfermedad})`;
  } else {
    return `Bajo riesgo (edad: ${edad}, ${estadoEnfermedad})`;
  }
}
