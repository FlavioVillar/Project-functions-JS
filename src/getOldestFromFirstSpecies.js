const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Faz busca (find), verifica se em 'employees.id' tem o parâmetro recebido (id de um funcionário) , retorna e o primeiro id (employees.responsibleFor[0]) gerenciado pelo funcionário,
function speciesByIds(ids) {
  return employees.find((item) => item.id === ids).responsibleFor[0];
}

// retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
// Cria const para receber o resultado da function 'speciesByIds'.
// Cria const para receber a busca (find), verifica se em 'species.id' tem o parâmetro recebido da function 'speciesByIds', achando, vai em 'species.residents' e ordena os elementos do array com sort, usando a 'species.residents.age' e retorna somente o 1º [0].
// retorna somente os valores das keys na const animal (para ficar igual ao resultado do test)
function getOldestFromFirstSpecies(ids) {
  const listAnimal = speciesByIds(ids);
  const animal = species
    .find((item) => item.id === listAnimal)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animal);
}

// **** verificação do exercício.
// 1 - Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie.
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
