let lista = ["Hana", 1, "matija", 4, 7, 8];

lista.sort(
  (a, b) =>
    (typeof b === "number") - (typeof a === "number") || (a > b ? 1 : -1)
);

console.log(lista);
