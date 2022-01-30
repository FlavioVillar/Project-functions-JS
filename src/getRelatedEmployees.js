const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Verificar se o parâmetro recebido (id) está contido (.includes) em 'employees.managers'. true (é gerente) e false (não é gerente).
function isManager(id) {
  return employees.some((item) => item.managers.includes(id));
}

// Verifica o parâmetro recebido é true ou false (usado ! - para se for false ir para o throw new Error)
//  Se true verifica se o parâmetro recebido está incluso em 'employees.managers' para retornar um array com nome e sobrenome.
function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, cur) => {
    if (cur.managers.includes(managerId)) {
      return [...acc, `${cur.firstName} ${cur.lastName}`];
    }
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
