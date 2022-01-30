const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  // Faz busca (find), verifica se em 'employees.firstName' ou 'employees.lastName' está incluído (.includes) o parâmetro recebido ('Emery') ou ('Wishart'), retorna o objeto completo em data.employees do que for igual a condição.
  return employees.find(
    ({ firstName, lastName }) =>
      employeeName.includes(firstName) || employeeName.includes(lastName),
  );
}

module.exports = getEmployeeByName;
