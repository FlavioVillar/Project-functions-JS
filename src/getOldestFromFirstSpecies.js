const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function speciesByIds(ids) {
  return employees.find((item) => item.id === ids).responsibleFor[0];
}

function getOldestFromFirstSpecies(ids) {
  const listAnimal = speciesByIds(ids);
  const animal = species
    .find((item) => item.id === listAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
