const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Faz filtro em 'species' com o parâmetro recebido no 'ids' , retorna um array com o que estiver incluso.
  // rest (...ids) permite representar um número indefinido de argumentos como um array, usado para receber mais de um id e fazer o filter.
  return species.filter(({ id }) => ids.includes(id)); // includes verifica se o id está contido na função
}

module.exports = getSpeciesByIds;
