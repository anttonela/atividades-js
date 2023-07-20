/*
    - IF -
    
A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, 
se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

Observações:
=== verifica o tipo e o valor | == verifica apenas o valor 
&&  isso e aquilo
|| ou
*/

console.log("\nIF\nExemplo 1: ");
const sum = 1 + 1;
if (sum === 2) {
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

console.log("\nExemplo 2: ");
if (sum === "2") { //vai dar false, porque 2 agora é string
    console.log("Sum is 2!");
} else {
    console.log("Sum is NOT 2!");
}

console.log("\nExemplo 3: ");
const summ = 1 + 2;
if (summ === 2) {
    console.log("Sum is 2!");
} else if (summ === 3) {
    console.log("Sum is 3!");
} else {
    console.log("Sum is NOT 2!");
}

//OPERADORES && ||
const sum1 = 2 + 2;
const sum2 = 3 + 10;

console.log("\nExemplo 4: ");
if (sum1 === 4 && sum2 === 6) {
    console.log("sum1 is 4 and sum2 is 6");
}

console.log("\nExemplo 5: ");
if (sum1 === 4 || sum2 === 6) {
    console.log("sum1 is 4 or sum2 is 6");
}