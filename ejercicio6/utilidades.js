export function esElegibleParaPrestamo(salario, puntaje) {
  if (salario > 3000000 && puntaje > 650) {
    return `Elegible para préstamo (salario: ${salario}, puntaje: ${puntaje})`;
  } else {
    return `No elegible para préstamo (salario: ${salario}, puntaje: ${puntaje})`;
  }
}
