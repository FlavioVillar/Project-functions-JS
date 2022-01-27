const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // spread... vai retornar um array vazio se não receber parâmetro.
  // Faz filtro (filter), verifica se em 'species' tem o parâmetro recebido no 'ids' , filtra e retorna um array com o que for igual.
  // rest (...ids) permite representar um número indefinido de argumentos como um array, usado para receber mais de um id e fazer o filter.
  return species.filter(({ id }) => ids.includes(id)); // includes verifica se o id está contido na função
}
// **** verificação do exercício.
// 1 - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// console.log(getSpeciesByIds());

// 2 -Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

// 3 - Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));
module.exports = getSpeciesByIds;
