const data = require('../data/zoo_data');

function speciesByIds(ids) {
  return data.employees.find((id) => ids.includes(id));
}

console.log(speciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

// function getOldestFromFirstSpecies(ids) {
//   return data.employees
//     .filter(({ id }) => ids.includes(id))
//     .map((animal) => `${animal.responsibleFor}`);
// }

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// module.exports = getOldestFromFirstSpecies;
