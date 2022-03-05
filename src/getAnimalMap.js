const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalLocationNoParameter() {
  return species.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.location]: species
        .filter((item) => item.location === cur.location)
        .map((item) => item.name),
    }),
    {},
  );
}

const getResidentsOfName = (locations) =>
  species
    .filter((item) => item.location === locations)
    .map(({ name, residents }) => ({
      [name]: residents.map((item) => item.name),
    }));

function getResidentsName() {
  return species
    .filter((item) => item.location)
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur.location]: getResidentsOfName(cur.location),
      }),
      {},
    );
}

// **** ok ____________________________________________________________________________________________________________________

const getResidentsOfName2 = (element) =>
  species
    .filter((item) => item.location === element)
    .map(({ name, residents }) => ({
      [name]: residents.map((item) => item.name).sort(),
    }));

const getResidentsOfName4 = (element) =>
  species
    .filter((item) => item.location === element)
    .map(({ name, residents }) => ({
      [name]: residents
        .filter((item) => item.sex === 'female')
        .map((item) => item.name)
        .sort(),
    }));

function getResidentsName2(element) {
  if (element.sex && element.sorted) {
    return species.filter((item) => item.location)
      .reduce(
        (acc, cur) => ({
          ...acc,
          [cur.location]: getResidentsOfName4(cur.location),
        }),
        {},
      );
  }
  return species.filter((item) => item.location)
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur.location]: getResidentsOfName2(cur.location),
      }),
      {},
    );
}

// **** ok ____________________________________________________________________________________________________________________

const getResidentsOfName3 = (element) =>
  species
    .filter((item) => item.location === element)
    .map(({ name, residents }) => ({
      [name]: residents
        .filter((item) => item.sex === 'female')
        .map((item) => item.name),
    }));

console.log(getResidentsOfName3('NE'));

function getResidentsName3() {
  return species
    .filter((item) => item.location)
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur.location]: getResidentsOfName3(cur.location),
      }),
      {},
    );
}

// **** ok ________________________________________________________________________________________________
function getAnimalMap(target) {
  if (!target || !target.includeNames) return getAnimalLocationNoParameter();
  if (target.sorted) return getResidentsName2(target);
  if (target.sex) return getResidentsName3();
  return getResidentsName();
}

module.exports = getAnimalMap;
