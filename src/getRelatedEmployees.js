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

// **** verificação do requisito.
// 1 - Retorna true se o id passado for de um gerente;
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 2 - Retorna false se o id passado não for de um gerente;
// console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// 3 - Se o id passado for de um gerente, retorna um array contendo nome e sobrenome das pessoas colaboradoras que ela é responsável;
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]

// 4 - Se o id passado não for de um gerente, dispara um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
module.exports = { isManager, getRelatedEmployees };
