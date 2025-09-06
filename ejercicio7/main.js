import { consultarLibrosPorPalabraClaveTitulo, consultarLibrosPaginas } from "./utilidades.js";

console.log("\n Libros que contienen 'futbol':");
console.log(consultarLibrosPorPalabraClaveTitulo("futbol"));  

console.log("\nLibros con número de páginas:");
console.log(consultarLibrosPaginas());
