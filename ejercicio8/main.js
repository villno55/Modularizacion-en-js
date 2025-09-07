import Alcancia from "./alcancia.js";

let miAlcancia = null;

const crearAlcancia = () => {
  miAlcancia = new Alcancia();
};

const actualizarDatosInterfaz = () => {
  document.querySelector("#txtMonedas200").value = miAlcancia.moneda200;
  document.querySelector("#txtMonedas500").value = miAlcancia.moneda500;
  document.querySelector("#txtMonedas1000").value = miAlcancia.moneda1000;
  document.querySelector("#txtTotalAlcancia").value = miAlcancia.calcularTotal();
};

document.querySelector("#img200").addEventListener("click", () => {
  miAlcancia.agregarMoneda(200);
  actualizarDatosInterfaz();
});

document.querySelector("#img500").addEventListener("click", () => {
  miAlcancia.agregarMoneda(500);
  actualizarDatosInterfaz();
});

document.querySelector("#img1000").addEventListener("click", () => {
  miAlcancia.agregarMoneda(1000);
  actualizarDatosInterfaz();
});

document.querySelector("#btnRomper").addEventListener("click", () => {
  let romper = confirm("¿Está seguro de romper la alcancía?");
  if (romper) {
    alert(miAlcancia.romper());
    inicializarAlcancia();
  }
});

document.querySelector("#btnNueva").addEventListener("click", () => {
  alert(miAlcancia.nueva());
  inicializarAlcancia();
});

const inicializarAlcancia = () => {
  crearAlcancia();
  actualizarDatosInterfaz();
};

inicializarAlcancia();
