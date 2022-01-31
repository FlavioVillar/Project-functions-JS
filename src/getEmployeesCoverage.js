const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

//  função que busca em employees.name e employees.id o parâmetro recebido (que pode ser o firstName, lastName ou id do employee), e retorna True ou False.
function getObjectReceives(target) {
  return employees.find(
    (item) =>
      target.name === item.firstName
      || target.name === item.lastName
      || target.id === item.id,
  );
}

// function que retorna a cobertura de todas as pessoas funcionárias ou um Error
function getResultList(target) {
  // Verifica o parâmetro recebido é true ou false. // (usado ! - para se for false ir para o throw new Error).
  if (!getObjectReceives(target)) throw new Error('Informações inválidas');
  // Faz Object Destructuring no objeto resultado da function getObjectReceives, para montar o objeto do return.
  const { firstName, lastName, responsibleFor, id } = getObjectReceives(target);
  // Se True - retorna objeto no formato pedido no teste.
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    // Reduce verifica se o id do animal esta incluso no funcionário. True - faz o push no acumulado do nome do animal na posição atual. False - segue.
    species: species.reduce((acc, cur) => {
      if (responsibleFor.includes(cur.id)) acc.push(cur.name);
      return acc;
    }, []),
    locations: species.reduce((acc, cur) => {
      if (responsibleFor.includes(cur.id)) acc.push(cur.location);
      return acc;
    }, []),
  };
}
//  como usar push, baseado https://stackoverflow.com/questions/62066192/array-reduce-accumulator-as-an-empty-array-push-not-working

// Função chamada no test.
function getEmployeesCoverage(target) {
  //  verifica se parâmetro é UNDEFINED, se True, retorna um objeto com o map de todos funcionários.   chamando a função getResultList colocado como parâmetro um objeto com employee.id, para retornar todos os funcionários pelo id.
  if (target === undefined) {
    return employees.map((item) => getResultList({ id: item.id }));
  }
  // False - Retorna getResultList com o parâmetro recebido.
  return getResultList(target);
}

module.exports = getEmployeesCoverage;
