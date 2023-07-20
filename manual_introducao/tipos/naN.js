/*
    - NaN -

NaN ("Not a Number") é normalmente encontrado quando o resultado de uma operação 
aritmética não pode ser expresso como um número. É também o único valor em 
JavaScript que não é igual a si mesmo.

Não é usual a utilização do NaN. Ele é retornado quando uma operação matemática falha 
ou quando uma função tenta transformar uma string em inteiro.
*/

NaN === NaN;        // falso
Number.NaN === NaN; // falso
isNaN(NaN);         // verdadeiro
isNaN(Number.NaN);  // verdadeiro
