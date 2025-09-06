export function enRango(numer) {
  if (numer >= 10 && numer <= 50) {
    return `Está en el rango (${numer})`;
  } else {
    return `Fuera del rango (${numer})`;
  }
}

