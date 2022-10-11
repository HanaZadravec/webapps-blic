let obj = [
  {
    a: "Hana",
    b: "Luka",
  },
  {
    c: 21,
  },
  {
    d: 55,
  },
];

function kljuc(lista) {
  noviArray = [];
  lista.forEach((element) => {
    if (Object.keys(element).length === 1) {
      noviArray.push(element);
    }
  });
  return noviArray;
}

console.log(kljuc(obj));
