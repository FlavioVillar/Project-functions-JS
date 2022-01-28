const { species, hours } = require("../data/zoo_data");
const data = require("../data/zoo_data");

// retornar todos os dias da semana em array.
const days = Object.keys(data.hours);

// retornar o nome de todos animais e coloca em array.
const animals = species.map(({ name }) => name);

// retorna um array com os animais que tem a species.availability no dia da semana passado como parâmetro.
const animalsOfDay = (day) =>
  species.reduce((acc, cur) => {
    if (cur.availability.includes(day)) {
      return [...acc, cur.name];
    }
    return acc;
  }, []);

const officeHour = (day) =>
  `Open from ${hours[day].open}am until ${hours[day].close}pm`;

function dayExhibition() {
  const result = {};
  days.forEach((day) => {
    if (day !== "Monday") {
      result[day] = {
        officeHour: officeHour(day),
        exhibition: animalsOfDay(day),
      };
    } else {
      result[day] = {
        officeHour: "CLOSED",
        exhibition: "The zoo will be closed!",
      };
    }
  });

  return result;
}

function getAnimalsDays(day) {
  return species.find(({ name }) => name === day).availability;
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) return getAnimalsDays(scheduleTarget);

  if (!scheduleTarget) return dayExhibition();

  if (days.includes(scheduleTarget)) {
    return { [scheduleTarget]: dayExhibition()[scheduleTarget] };
  }

  return dayExhibition();
}

// 1 - sem parâmetros, retorna os horários para cada dia e quais animais estarão disponíveis
// const expected = {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//     'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
// console.log(getSchedule());
// 2 - caso os parâmetros não seja um animal e dia, retorna um objeto com os horários do dia e os animais em exibição (1ms)

// 3 - se 'Monday' for passado por parâmetro, deverá informar que o zoológico está fechado

// 4 - se um dia for passado, retorna somente o horário daquele expediente e os animais em exibição no dia

// 5 - se for passado um animal, deverá retornar um array com os dias em que ele está em exibição
// console.log(getSchedule('lions'));
module.exports = getSchedule;
