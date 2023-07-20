/*
    - TRUE and False -

Observação:
!! verifica se é verdadeiro ou falso
*/

//FALSE
const x = ''; //string vazia sempre vai ser falso
console.log("String vazia será: " + !!x);

const y = 0; // 0 vai ser false
console.log("0 será: " + !!y);

const a = null;
const b = undefined;
console.log("Const null retornará: " + !!a);
console.log("Const undefined retornará: " + !!b);

//TRUE
const list = []; //uma lista array vazio é true
console.log("Array vazio retornará: " + !![]);
console.log("Array com o valor invertido retornará: " + !list); //false porque o ! inverte o valor

const object = {};
console.log(!!object);

//checar se a lista tem algum valor
if (list.length > 0) {
    console.log(list);
}