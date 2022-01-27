const data = require('../data/zoo_data');

// const para verificação do requisito.
// const testEntrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// visto na mentoria do Daniel com par e impar e em https://youtu.be/W7IPXg0A1-0
// Passa o parâmetro recebido em (entrants) e executa uma função redutora (reduce) para cada elemento do array, resultando em um único valor de retorno.
// O reduce recebe 2 parâmetros: (acc) e (Valor real ({ age }) (como object destructuring)), e foi criada 3 condições (< 18) (>= 18 &&< 50) (>= 50), e também recebe um objeto { child: 0, adult: 0, senior: 0 } para receber o valor do acc.
// Nas 3 primeiras condições verifica em cada objeto a '[key]: age' recebida como parâmetro, com a regra definida, se true vai no acc e soma +1 (o acc está com 'acc.child' para o valor ser inserir na key de igual nome no objeto criado para receber o acc)
function countEntrants(entrants) {
  return entrants.reduce(
    (acc, { age }) => {
      if (age < 18) acc.child += 1;
      if (age >= 18 && age < 50) acc.adult += 1;
      if (age >= 50) acc.senior += 1;
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },
  );
}

function calculateEntry(entrants) {
  // Retorna 0 se nenhum argumento for passado ou for passado objeto vazio, contando a quantidade de chaves 'name' no objeto passado com 'Object.keys(entrants).length'
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  // const para receber o valor da countEntrants
  const listEntrants = countEntrants(entrants);
  // (Object.keys(listEntrants) vai pegar só as chaves ['child', 'adult', 'senior'] em array (que vem da função countEntrants).
  // reduce passa no array, e o acc adiciona a multiplicação de listEntrants na posição atual com data.prices na posição atual, retorna o acc.
  const listPrices = Object.keys(listEntrants).reduce(
    (acc, atual) => acc + listEntrants[atual] * data.prices[atual],
    0,
  );
  return listPrices;
}
// **** verificação do requisito.
// 1 - Ao receber um array de visitantes, retorna um objeto com a contagem;
// console.log(countEntrants(testEntrants));

// 2 - Retorna 0 se nenhum argumento for passado;
// console.log(calculateEntry());

// 3 - Retorna 0 se um objeto vazio for passado;
// console.log(calculateEntry({}));

// 4 - Retorna o preço total a ser cobrado dado o array de pessoas.
// console.log(calculateEntry(testEntrants));

// 5 - ao receber um array com 1 pessoa adulta retorna o valor correto
// console.log(calculateEntry({ name: 'Maria Costa', age: 18 }));

// 6 - ao receber um array com 1 pessoa mais velha retorna o valor correto
// console.log(calculateEntry({ name: 'Carlos Nogueira', age: 50 }));

// 7 - ao receber um array com 1 criança retorna o valor correto
// console.log(calculateEntry({ name: 'Lara Carvalho', age: 5 }));

// 8 - ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto
// console.log(calculateEntry([{ name: 'Lara Carvalho', age: 5 }, { name: 'Carlos Nogueira', age: 50 }]));
module.exports = { calculateEntry, countEntrants };
