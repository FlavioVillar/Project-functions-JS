const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Busca em 'employees.id' o parâmetro recebido (id de um funcionário) , retorna e o primeiro id de animal (employees.responsibleFor[0]) gerenciado pelo funcionário,
function speciesByIds(ids) {
  return employees.find((item) => item.id === ids).responsibleFor[0];
}

// função que retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
function getOldestFromFirstSpecies(ids) {
  // Resultado da function 'speciesByIds' e aplica parÂmetro recebido.
  const listAnimal = speciesByIds(ids);
  // Faz busca em 'species.id' com o parâmetro recebido da function 'speciesByIds', achando, vai em 'species.residents' e ordena os elementos do array com sort, usando a 'species.residents.age' e retorna somente o 1º [0].
  const animal = species
    .find((item) => item.id === listAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  // retorna somente os valores das keys na const animal (para ficar igual ao resultado do test)
  return Object.values(animal);
}

module.exports = getOldestFromFirstSpecies;
