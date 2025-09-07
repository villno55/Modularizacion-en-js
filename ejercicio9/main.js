import Contacto from "./contacto.js";

let agd = [];

function verAgd() {
  const tb = document.querySelector("table tbody");
  tb.innerHTML = "";
  agd.forEach(c => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${c.identificacion}</td>
      <td>${c.nombre}</td>
      <td>${c.apellido}</td>
      <td>${c.correo}</td>
      <td>${c.celular}</td>
    `;
    tb.appendChild(fila);
  });
}

function add(e) {
  e.preventDefault();
  let id = document.querySelector("[name='identificacion']").value;
  let nom = document.querySelector("[name='nombre']").value;
  let ape = document.querySelector("[name='apellido']").value;
  let mail = document.querySelector("[name='correo']").value;
  let cel = document.querySelector("[name='celular']").value;

  if (agd.some(c => c.identificacion === id)) {
    alert("Ya existe un contacto con ese id");
    return;
  }

  agd.push(new Contacto(id, nom, ape, mail, cel));
  verAgd();
  document.querySelector("form").reset();
}

function verCto() {
  let id = prompt("ID a buscar:");
  let c = agd.find(c => c.identificacion === id);
  if (c) alert(`${c.nombre} ${c.apellido} - ${c.correo} - ${c.celular}`);
  else alert("No existe");
}

function upd() {
  let id = prompt("ID a actualizar:");
  let c = agd.find(c => c.identificacion === id);
  if (c) {
    c.nombre = prompt("Nuevo nombre:", c.nombre);
    c.apellido = prompt("Nuevo apellido:", c.apellido);
    c.correo = prompt("Nuevo correo:", c.correo);
    c.celular = prompt("Nuevo cel:", c.celular);
    verAgd();
  } else alert("No existe");
}

function del() {
  let id = prompt("ID a eliminar:");
  agd = agd.filter(c => c.identificacion !== id);
  verAgd();
}

document.querySelector("[value='Agregar']").addEventListener("click", add);
document.querySelector("[value='Consultar']").addEventListener("click", e => { e.preventDefault(); verCto(); });
document.querySelector("[value='Actualizar']").addEventListener("click", e => { e.preventDefault(); upd(); });
document.querySelector("[value='Eliminar']").addEventListener("click", e => { e.preventDefault(); del(); });
