export function esBisiesto(anio) {
  if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
    return `Es bisiesto (${anio})`;
  } else {
    return `No es bisiesto (${anio})`;
  }
}
