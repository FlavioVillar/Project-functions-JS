const data = require('../data/zoo_data');

// visto na mentoria do Daniel com par e impar e em https://youtu.be/W7IPXg0A1-0
// Função retorna um objeto { adult: 2, child: 3, senior: 1 } para o test.
// O reduce recebe na posição atual ({ age }) com object destructuring))
// São executadas 3 condições e acc recebe um objeto como valorInicial { child: 0, adult: 0, senior: 0 }.
// Em cada condição, se true vai no acc e soma +1 (o acc está com 'acc.child' para o valor inserir na key de igual nome no objeto criado para receber o acc).
function countEntrants(entrants) {
  return entrants.reduce(
    (acc, { age }) => {
      if (age < 18) acc.child += 1;
      if (age >= 18 && age < 50) acc.adult += 1;
      if (age >= 50) acc.senior += 1;
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(entrants) {
  // Retorna 0 se, sem argumento ou objeto vazio(quantidade de chaves do objet).
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // const para receber o valor da countEntrants com parâmetro passado.
  const listEntrants = countEntrants(entrants);
  // (Object.keys(listEntrants) vai pegar só as chaves ['child', 'adult', 'senior'].
  // reduce passa no array, e o acc acumula a multiplicação de listEntrants na posição atual vezes data.prices na posição atual.
  const listPrices = Object.keys(listEntrants).reduce(
    (acc, atual) => acc + listEntrants[atual] * data.prices[atual],
    0,
  );
  return listPrices;
}

module.exports = { calculateEntry, countEntrants };
