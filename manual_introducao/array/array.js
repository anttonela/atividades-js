/*
    - ARRAY -

Os arrays são estruturas que servem para guardar dados, e organizá-los. Você pode guardar 
seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que 
precisar de calças, chapéus ou meias vai saber em que gaveta buscar.

- Podemos acessar o índice de um elemento com o indexOf()
- Para adicionar um elemento ao final do array podemos usar o push()
- Para adicionar um elemento no início do array podemos usar o unshift()
- Para remover um elemento do início de um array podemos usar o shift()
- Para remover um elemento do final de um array podemos usar o pop()
- Para remover um item a partir de seu índice usamos o método splice()
*/

const names = ["Maria", "Francisca", "Joana"];

// pra buscar o nome na posição 1
const chica = names[1];
console.log(`\nPegando posição 1 do array names: ${chica}`);
// imprime: "Francisca"

//adiciona valores no final do array
names.push("Joaquim");
console.log(`\nNames push Joaquim: ${names}`);
names.push("Luiz");
console.log(`\nNames push Luiz: ${names}`);

//adiciona valores no começo do array
names.unshift("Benjamin");
console.log(`\nAdicionando valores ao início do array: ${names}`);

//retira ultimo valor
names.pop();
console.log(`\nRetirando valor do final do array:${names}`);

//mudar valores joana para ana
names[3] = "Ana";
console.log(`\nMudando a posição 3 do array 'Jõao' para Ana: ${names}`);

//verifica qual é a posição do elemento joaquim = 6
console.log(`\nA posição em que 'Joaquim' está no array é: ` + names.indexOf("Joaquim"));

//ordenar lista alfabeticamente
console.log('\nO array em ordem alfabetica fica: ' + names.sort());

//quantos itens tem na lista
console.log('\nA quantidade de itens no array names é: '+ names.length);

//verifica se alguma variavel é uma lista | se names é uma lista
console.log('\nVerificando se names é uma lista: ' + Array.isArray(names));