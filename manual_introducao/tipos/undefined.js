/*
    - Undefined -

Uma variável que não recebeu um valor tem o valor undefined
*/

var x;
if (x === undefined) {
   // sentenças aqui são executadas
}
else {
   // o código aqui não é executado
}

// escreve no console "foo string"
(function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();

// escreve no console "foo string"
(function(undefined){ console.log(undefined, typeof undefined); })('foo');