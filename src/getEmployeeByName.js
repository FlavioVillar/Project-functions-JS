const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(
    ({ firstName, lastName }) =>
      employeeName.includes(firstName) || employeeName.includes(lastName),
  );
}

module.exports = getEmployeeByName;
