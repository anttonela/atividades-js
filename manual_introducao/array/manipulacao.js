/*
Manipulação de array com array map, filter e reduce.

    - MAP -
Percorre todos os item do array, executa alguma transformação nesses itens e retorna
 um novo array sem modificar o atual.

    - FILTER -
Ele vai percorrer todo o array e criar um novo com todos os elementos que 
passaram no teste implementado

    - REDUCE -
Passa por cada item do array fazendo uma expressão escolhida, e no final vai 
devolver um único valor
*/

//  MAP

// executa em uma função em cada item da lista e retorna uma nova lista com o resultado
const numbers = [1, 2, 3, 4, 5];
const multiplicando = numbers.map(function (number) {
    return number * 2;
});
console.log('\nOs valores do array multiplicados por dois fica a seguinte ordem: ' + multiplicando);
// imprime: 2, 4, 6, 8, 10


//  FILTER

const idades = [8, 13, 27, 30, 22, 40];

//filtrar, fazer uma nova lista e mostrar numeros pares
const evenAges = idades.filter(function(idades) {
    return idades % 2 === 0  //se o resto da divisão é zero, é par
})
console.log('\nOs números pares no array idade são: ' + evenAges);
// imprime: 8, 30, 22, 40

//  REDUCE

//soma todos numeros [8, 13, 27, 30, 22, 40];
const sumOfAges = idades.reduce(function (idades, accumulator) {
    return accumulator + idades;
}, 0); //inicia com 0 + age
console.log('\nA soma das idades do array é: ' + sumOfAges);
// imprime 140

// iniciar com o saldo 100 e depois juntar com a soma do array idades
const sumOfAgess = idades.reduce(function (idades, accumulator) {
    return accumulator + idades;
}, 100);
console.log('\n100 + o array idades trás o resultado de: ' + sumOfAgess);
// imprime: 240