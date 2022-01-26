const data = require('../data/zoo_data');

// visto na mentoria do Daniel com par e impar - e depois na mentoria Zoo function.
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
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const listEntrants = countEntrants(entrants);
  // (Object.keys(listEntrants) vai pegar só as chaves ['child', 'adult', 'senior'] em array (que vem da função countEntrants).
  // reduce passa no array, e o acc soma a multiplicação de listEntrants na posição atual com data.prices na posição atual, retorna o acc.
  const listPrices = Object.keys(listEntrants).reduce(
    (acc, atual) => acc + listEntrants[atual] * data.prices[atual],
    0,
  );
  return listPrices;
}

module.exports = { calculateEntry, countEntrants };
