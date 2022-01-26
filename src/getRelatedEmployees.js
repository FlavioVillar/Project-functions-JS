const data = require("../data/zoo_data");

function isManager(employeeName) {
console.log(data.employees);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager("4b40a139-d4dc-4f09-822d-ec25e819a5ad"));
module.exports = { isManager, getRelatedEmployees };
