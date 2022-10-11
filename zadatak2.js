function polovica(rijec) {
  return rijec.slice(Math.floor(rijec.length * 0.5) - 1, rijec.length);
}

console.log(polovica("Matija je ime"));
