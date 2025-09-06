import libros from "./libros.json" with { type: "json" };

export function consultarLibrosPorPalabraClaveTitulo(palabra) {
  let resultados = [];
  for (let libro of libros) {
    if (libro.Titulo.toLowerCase().includes(palabra.toLowerCase())) {
      resultados.push(`${libro.Titulo} (${libro.Autor})`);
    }
  }
  return resultados;
}

export function consultarLibrosPaginas() {
  let lista = [];
  for (let libro of libros) {
    lista.push(`${libro.Titulo} → ${libro.Paginas} páginas`);
  }
  return lista;
}
