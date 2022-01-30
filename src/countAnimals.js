const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Condição quando não receber parâmetro. // coloca ({}) no valor inicial do acc para sair como objeto, usa spread... para copiar as informações do array original e colar no acumulador. Cria a key com 'species.name' na posição atual, que recebe a contagem de species.residents da posição atual.
  if (!animal) {
    return species.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: cur.residents.length }),
      {},
    );
  }
  // Condição para parâmetro só com nome do animal { specie: 'penguins' }. Faz busca em 'species.name' se tem o parâmetro recebido,o que for igual, faz a contagem do/dos 'name' que ficaram em species.residents
  if (!animal.sex) {
    return species.find((item) => item.name === animal.specie).residents
      .length;
  }
  // Condição para o parâmetro com nome e sexo do animal { specie: 'giraffes', sex: 'female' }. Faz busca em 'species.name' tem o parâmetro recebido (specie: 'giraffes') , retorna o que for igual. Reduce faz a contagem, quando posição atual 'species.residents.sex' é igual o parâmetro recebido (sex: 'female').
  return species.find((item) => item.name === animal.specie)
    .residents.reduce(
      (acc, cur) => (cur.sex === animal.sex ? acc + 1 : acc),
      0,
    );
}

module.exports = countAnimals;
