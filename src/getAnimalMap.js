const { species } = require("../data/zoo_data");
const data = require("../data/zoo_data");

// Sem parâmetros, retorna animais categorizados por localização.
// Reduce empurra para o acc - key criada com [location] e seu valor é ado com push no name na posição atual.
// push visto em https://24ways.org/2019/five-interesting-ways-to-use-array-reduce/ - Mas funcionou somente quando criado Key iguais no objeto, igual requisito 'calculateEntry'
function getAnimalLocationNoParameter() {
  return species.reduce(
    (acc, cur) => {
      acc[cur.location].push(cur.name);
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] }
  );
}
// target.x apareceu com erro na digitação, mas passou no test... (target.qualquerLetra funciona)

function getAnimalLocationSex(target) {
  return species.reduce(
    (acc, cur) => {
      if (cur.residents.sex === target.x) acc[cur.location].push(cur.name);
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] }
  );
}
function nameOfAnimal(target) {

  return Object.keys(species.residents)
    .filter((item) => item.residents.sex === target.sex)
    .map((animal) => animal.residents.name);
}
console.log(nameOfAnimal({ includeNames: true, sex: "female", sorted: true }));

function getAnimalLocationNameSexSorted(target) {
  // const nameOfAnimal = species
  //   .filter((item) => item.residents === target.sex)
  //   .map((animal) => animal.name);

  return species.reduce(
    (acc, cur) => {
      if (cur.residents.sex === target.x)
        acc[cur.location].push({ [cur.name]: nameOfAnimal });
      return acc;
    },
    { NE: [], NW: [], SE: [], SW: [] }
  );
}

function getAnimalMap(target) {
  if (!target) {
    return getAnimalLocationNoParameter();
  }
  // return getAnimalLocationSex(target);
  return getAnimalLocationNameSexSorted(target);
}
// ✕ sem a opção `includeNames` especificada e somente com a opção `sex: female` especificada, retorna todos os animais categorizados por localização sem aplicar o filtro `sex` (2ms)
// ✕ sem a opção `includeNames` especificada e as opções `sex: female` e `sorted: true` forem especificadas, retorna animais categorizados por localização sem aplicar os filtros `sex` e `sorted` (1ms)
// com a opção `includeNames: true` especificada, retorna nomes de animais (5ms)
//     ✕ com a opção `sorted: true` especificada, retorna nomes de animais ordenados (2ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea (1ms)
//     ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados (1ms)

console.log(getAnimalMap({ includeNames: true, sex: "female", sorted: true }));
// const expected = {
//   NE: [
//     { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//     { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
//   ],
module.exports = getAnimalMap;

// ✓ sem parâmetros, retorna animais categorizados por localização (2ms)
// ✕ com a opção `includeNames: true` especificada, retorna nomes de animais (1ms)
// ✕ com a opção `sorted: true` especificada, retorna nomes de animais ordenados
// ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada, retorna somente nomes de animais macho/fêmea (1ms)
// ✕ com a opção `sex: 'female'` ou `sex: 'male'` especificada e a opção `sort: true` especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados (6ms)
