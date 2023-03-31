const collection = [
  {
    lastName: "Enzo",
    firstName: "Saitta",
    age: 26,
  },
  {
    lastName: "Pedro",
    firstName: "Saitta",
    age: 35,
  },
  {
    lastName: "Maribel",
    firstName: "claudia",
    age: 54,
  },
  {
    lastName: "Ricardo",
    firstName: "anacleto",
    age: 12,
  },
];

function getAll() {
  return collection;
}
function getByAge(age: number) {
  const objetoEncontrado = collection.find((p) => {
    return p.age == age;
  });
  return objetoEncontrado;
}

export { getAll, getByAge };
