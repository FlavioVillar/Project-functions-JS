const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // Condição quando não receber parâmetro. // coloca ({}) no reduce para virar objeto, usa spread... para copiar as informações do array original e colar no acumulador. Usa [atual.name] - [] usado para criar a key do 'species.name' na posição atual para adicionar no acumulador + mais a contagem (length) dos 'name' que ficaram em species.residents na posição atual.
  if (!animal) {
    return species.reduce(
      (acc, atual) => ({ ...acc, [atual.name]: atual.residents.length }),
      {},
    );
  }
  // condição quando só tem o parâmetro com o argumento { specie: 'penguins' }, sem parâmetro sex. Faz busca (find), verifica se em 'species.name' tem o parâmetro recebido (specie: 'penguins') , retorna o que for igual. fazendo a contagem (length) dos 'name' que ficaram em species.residents
  if (!animal.sex) {
    return species.find((item) => item.name === animal.specie).residents
      .length;
  }
  // condição para o parâmetro com o argumento o argumento { specie: 'giraffes', sex: 'female' }. Faz busca (find), verifica se em 'species.name' tem o parâmetro recebido (specie: 'giraffes') , retorna o que for igual. Aplica reduce, que verifica se a posição atual 'species.residents.sex' é igual o parâmetro recebido (sex: 'female'), SIM adiciona ao acumulador, NÃO retorna o acc com seu parâmetro 0.
  return species.find((item) => item.name === animal.specie)
    .residents.reduce(
      (acc, atual) => (atual.sex === animal.sex ? acc + 1 : acc),
      0,
    );
}
// **** verificação do exercício.
// 1 - Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor.
// console.log(countAnimals());

// 2 - Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// console.log(countAnimals({ specie: 'giraffes' }));

// 3 - Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.
// console.log({ specie: 'bears', sex: 'female' });
module.exports = countAnimals;
