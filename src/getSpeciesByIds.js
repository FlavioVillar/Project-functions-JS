const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.includes(id)); // includes verifica se o id está contido na função
}

module.exports = getSpeciesByIds;
