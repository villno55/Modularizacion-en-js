export function categoriaIMC(valor) {
  if (valor < 18.5) {
    return `Bajo peso (IMC: ${valor})`; //incluyo el valor
  } else if (valor >= 18.5 && valor <= 24.9) {
    return `Normal (IMC: ${valor})`;
  } else if (valor >= 25 && valor <= 29.9) {
    return `Sobrepeso (IMC: ${valor})`;
  } else {
    return `Obesidad (IMC: ${valor})`;
  }
}
