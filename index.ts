import { getAll, getByAge } from "./employees";

function main() {
  console.table(getAll());
  console.table(getByAge(26));
}

main();
