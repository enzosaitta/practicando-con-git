import { getAll, getByAge } from "./employees";

function main() {
  console.table(getAll());
  console.table(getByAge(26));
  console.log("Hola enzo, aca se hizo un cambio piola");
  
  
}

main();
