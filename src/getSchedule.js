const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// retornar dias da semana em array, retirando a segunda.
const days = Object.keys(data.hours);

// retornar o nome de todos animais e coloca em array.
const animals = species.map(({ name }) => name);

// recebido como parâmetro um dia da semana, retorna array com os animais disponíveis.
const animalsOfDay = (day) =>
  species.reduce((acc, cur) => {
    if (cur.availability.includes(day)) {
      return [...acc, cur.name];
    }
    return acc;
  }, []);

// pode receber como parâmetro um dia (recebendo como parâmetro { [target]: ListDayHourAnimalExhibition()[target] }, ou pode só retornar o que ela executa sem parâmetro definido.
// função que usa a const days para gerar 2 objetos, 1 para os dias da semana que não são Monday e outro para Monday.
function ListDayHourAnimalExhibition() {
  return days.reduce((acc, cur) => {
    if (cur !== 'Monday') {
      return {
        ...acc,
        [cur]: {
          officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`, // usar o objeto - hours: Tuesday: { open: 8, close: 6 },
          exhibition: animalsOfDay(cur),
        },
      };
    }
    return {
      ...acc,
      [cur]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }, {});
}
// retorna o horário daquele expediente e os animais em exibição no dia. (4)
function getSchedule(target) {
  // Se passado um animal, retorna um array com os dias dele em exibição
  if (animals.includes(target)) return species.find(({ name }) => name === target).availability;
  // se um dia for passado, chama a função que trata os dias, sendo passado como parâmetro para a função um objeto com o target, pois a função está sem parâmetro.
  if (days.includes(target)) return { [target]: ListDayHourAnimalExhibition()[target] };

  // // retorno se não receber parâmetro
  if (!target) return ListDayHourAnimalExhibition();

  // retorno se parâmetros não seja um animal e dia.
  return ListDayHourAnimalExhibition();
}

module.exports = getSchedule;

console.log(getSchedule('Tuesday'));
