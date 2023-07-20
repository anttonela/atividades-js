/*
    - FOR -

O for determina que uma ação deve ser executada a partir de uma condição inicial até que 
seja encontrada outra que interrompa o laço. O fluxo de repetição é controlado por uma 
variável, que é testada a cada repetição até que se encontre a condição de parada. Ele
percorre.
*/

// Para imprimir 2 x números do array
// numeros.length indica que é para fazer até que todos os numeros terminem
let numeros = [3, 4, 6, 7, 10, 20, 30, 35, 40];
console.log("\nTabuada: ");
for (let index = 0; index < numeros.length; index++) {
    console.log(2 + " x " + numeros[index] + " = " + 2*numeros[index]);
}

console.log('\nAdicionar 1 até que seja menor que dez: ');
for (let index = 0; index < 10; index++){
    console.log(index);
}

console.log('\nAdicionar 1 até que seja igual a 10: ');
for (let index = 0; index <= 10; index++){
    console.log(index);
}

// Está imprimindo x posição para frente (posição indicada na let i)
console.log("\nPosição let i para frente: ");
const cars = ["Ferrari", "Tesla", "Mercedes"];
for (let i = 1; i < cars.length; i++){
    console.log(cars[i]);
}

console.log("\n");
//mesmo que acima, mas melhor pra trabalhar com listas
for (let car of cars) { //pra cada carro na lista de carros
    console.log(car);
}