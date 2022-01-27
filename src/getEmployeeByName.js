const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  // Faz busca (find), verifica se em 'employees.firstName' ou 'employees.lastName' está incluído (.includes) o parâmetro recebido ('Emery') ou ('Wishart'), retorna um objeto do que for igual a condição.
  return employees.find(
    ({ firstName, lastName }) =>
      employeeName.includes(firstName) || employeeName.includes(lastName),
  );
}
// **** verificação do requisito.
// 1 - Sem parâmetros, retorna um objeto vazio
// console.log(getEmployeeByName());

// 2 - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// console.log(getEmployeeByName('Emery'));

// 3 - Quando provido o último nome do funcionário, retorna o objeto do funcionário
// console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
