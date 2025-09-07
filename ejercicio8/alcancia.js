export default class Alcancia {
  constructor() {
    this.moneda200 = 0;
    this.moneda500 = 0;
    this.moneda1000 = 0;
  }

  agregarMoneda(valor) {
    if (valor === 200) this.moneda200++;
    else if (valor === 500) this.moneda500++;
    else if (valor === 1000) this.moneda1000++;
    else alert("Solo podes ingresar monedas de 200, 500 o 1000");
  }

  calcularTotal() {
    return (this.moneda200 * 200) +
           (this.moneda500 * 500) +
           (this.moneda1000 * 1000);
  }

  romper() {
    this.moneda200 = this.moneda500 = this.moneda1000 = 0;
    return "Rompiste la alcancía, ahora estás limpio";
  }

  nueva() {
    this.moneda200 = this.moneda500 = this.moneda1000 = 0;
    return "Creaste una alcancía nueva";
  }
}
