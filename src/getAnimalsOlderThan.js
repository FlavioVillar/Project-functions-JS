const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((comparar) => comparar.name === animal)
    .residents.every((test) => test.age >= age);
}

module.exports = getAnimalsOlderThan;
