const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const animals = species.map(({ name }) => name);

const animalsOfDay = (day) =>
  species
    .filter((animal) => animal.availability.includes(day))
    .map((animal) => animal.name);

const officeHour = (day) =>
  `Open from ${hours[day].open}am until ${hours[day].close}pm`;

function dayExhibition() {
  const result = {};
  days.forEach((day) => {
    if (day !== 'Monday') {
      result[day] = {
        officeHour: officeHour(day),
        exhibition: animalsOfDay(day),
      };
    } else {
      result[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
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

module.exports = getSchedule;
