const data = require('../data/zoo_data');

function countAnimals(animal) {
  // bloco if para quando não receber parâmetro, coloca ({}) no reduce para virar objeto, usa spread ... para copiar as informações do array original e colar em outro lugar. [atual.name] - [] usado para criar a key acessando o elemento no array.
  if (animal === undefined) {
    return data.species.reduce(
      (acc, atual) => ({ ...acc, [atual.name]: atual.residents.length }),
      {},
    );
  }
  if (animal.sex === undefined) {
    return data.species.find((item) => item.name === animal.specie).residents.length;
  }
  const animalFiltro = data.species.find((item) => item.name === animal.specie);
  return animalFiltro.residents.reduce(
    (acc, atual) => (atual.sex === animal.sex ? acc + 1 : acc), 0,
  );
}

module.exports = countAnimals;
