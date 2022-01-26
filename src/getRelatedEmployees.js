const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(employeeName) {
  return employees.some((manager) => manager.managers.includes(employeeName));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((responsible) => responsible.managers.includes(managerId))
      .map((funcionario) => `${funcionario.firstName} ${funcionario.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
