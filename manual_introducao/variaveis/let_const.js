/*
    - CONST e LET -

São os tipos de variáveis, a difereça é que const não aceita novos 
valores e let sim
*/

// STRING

// Exemplo 01
const message = 'Hello world!'
console.log(message.length)
// console.log(x) mostra na tela
// length mostra a quantidade de caracteres
// imprime: 12

// Exemplo 02
const firstName = "João";
const lastName = "Reis";

//modo antigo
console.log("Meu nome é " + firstName + " " + lastName);
// imprime: Meu nome é João Reis

//modo atual
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()}`);
// imprime: Meu nome é João Reis

// Exemplo 03
const names = "Ana,Julia,Bruna";
console.log(names.split(","));
// o slipt quebra a partir do que for indicado, no caso é a virgula
// imprime: 0:Ana 1:Júlia 3:Bruna


//NÚMEROS

const number = 5;
console.log(number * 2);

//converter numero pra string
console.log(number.toString());

//pra saber qual é o tipo
console.log(typeof number)

console.log(typeof number.toString())
// como converteu para string, a variável number irá ser string


//BOOLEANOS

//false and true

console.log(2 == 2)
// imprime: true

// null and undefined
// null: não tem nenhum valor, vazio
// undefined: valor ainda não definido

const x = null;

const y = undefined;