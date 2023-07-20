/*
    - WHILE - 

Cria um laço que executa uma rotina especifica enquanto a condição de teste for 
avaliada como verdadeira. A condição é avaliada antes da execução.
*/

console.log("\nPrimeiro exempo: ");

let salario = 100
while (salario < 500) {
    salario += 100;
// ecutado até que a condição salario < 5000 se tornasse falsa permitindo ao código 
// continuar o fluxo normal da aplicação
    console.log("O salário ainda é R$" + salario);
}


//  Array com uma lista de cores, o nome e valor de cada uma das suas propriedades
console.log("\nSegundo exemplo: ");

const cores = [
    'Verde',
    'Amarelo',
    'Azul',
    'Branco'
];

let index = 0;

while (index < cores.length) {
    console.log(index, cores[index]);
    index++;
}