const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Testa com o (some) se ao menos um dos elementos no array 'employees' passa no teste implementado, que é verificar se o parâmetro recebido (id) está contido (.includes) em 'employees.managers'. true (é gerente) e false (não é gerente).
function isManager(id) {
  return employees.some((item) => item.managers.includes(id));
}
// Verifica o parâmetro recebido (managerId) é true ou false com a function isManager:
//  True = Filtra (filter) todos os objetos de 'employees', retornando o/os objeto/s que tem o parâmetro recebido (id do manager) contido em 'employees.managers' (que são os objetos dos funcionários gerenciados pelo id do parâmetro). Pega o/os objeto/s e mapeia (map) para retornar um array somente com o 'firstName' e 'lastName' do objeto mapeado.
//  False = retorna 'throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');'
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((item) => item.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
// **** verificação do requisito.
// 1 - Retorna true se o id passado for de um gerente;
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 2 - Retorna false se o id passado não for de um gerente;
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// 3 - Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 4 - Se o id passado não for de um gerente, dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
