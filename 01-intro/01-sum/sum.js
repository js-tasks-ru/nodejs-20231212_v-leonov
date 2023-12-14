function sum(a, b) {
  if((typeof a != "number") || (typeof b != "number"))
  throw new TypeError("Обнаружен чужеродный аргумент");

  return a+b;
}

module.exports = sum;