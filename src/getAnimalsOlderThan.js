const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  Faz busca (find), verifica se em 'species.name' tem o parâmetro recebido animal ('penguins') , retorna o que for igual, vai em 'species.residents' do 'name' encontrado e testa se todos (every) em 'species.residents.age', possuem a idade mínima passada no parâmetro age (10), retorna boolean.
function getAnimalsOlderThan(animal, age) {
  return species
    .find((item) => item.name === animal)
    .residents.every((test) => test.age >= age);
}

module.exports = getAnimalsOlderThan;
