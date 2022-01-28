const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  função que busca (find) em employees.name e employees.id o parâmetro recebido, que pode ser o firstName, lastName ou id do employee.
function getObjectReceives(target) {
  return employees.find(
    (item) =>
      target.name === item.firstName
      || target.name === item.lastName
      || target.id === item.id,
  );
}

function getResultList(target) {
  if (!getObjectReceives(target)) {
    throw new Error('Informações inválidas');
  }
  // faz Object Destructuring no objeto resultado da function getObjectReceives, para extrair valores nas const seguintes e para montar o objeto do return.
  const { firstName, lastName, responsibleFor, id } = getObjectReceives(target);
  // filter no id de species.id usando o employees.responsibleFor do parâmetro recebido
  const getResponsibleForAnimal = species.filter((item) => responsibleFor.includes(item.id));
  // map com os nomes dos animais que o employee é responsável
  const getAnimalName = getResponsibleForAnimal.map((item) => item.name);
  // map com a localização do animal pelo nome
  const getAnimalLocation = getResponsibleForAnimal.map((item) => item.location);
  // retorna objeto no formato pedido no teste.
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getAnimalName,
    locations: getAnimalLocation,
  };
}
//  função que insere na function getResultList o parâmetro quando recebe UNDEFINED em getEmployeesCoverage, retorna um objeto com o map de todos os employees. ({ id: item.id })
function allListEmployee() {
  return employees.map((item) => getResultList({ id: item.id }));
}
// Função chamada no test que só está retornando outras 2 funções.
function getEmployeesCoverage(target) {
  if (target === undefined) {
    return allListEmployee();
  }
  return getResultList(target);
}
// **** verificação do requisito.
// 1 - se o objeto de opções tiver a propriedade name retorna somente a pessoa correspondente
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));

// 2 - a propriedade name do objeto de opções também funciona usando o segundo nome
// console.log(getEmployeesCoverage({ name: 'Spry' }));

// 3 - se o objeto de opções tiver a propriedade id retorna somente a pessoa correspondente
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

// 4 - sem parâmetros, retorna uma lista com a cobertura de todas as pessoas funcionárias
// console.log(getEmployeesCoverage());

// 5 - caso não haja nenhuma pessoa com o nome ou id especificados deverá ser lançado um error
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));
module.exports = getEmployeesCoverage;
