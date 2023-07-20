/*
    - BigInt -

não é estritamente igual a um Number, você pode armazenar e operar grandes números 
inteiros, mesmo além do limite de números inteiros seguros. Um BigInt se comporta 
como um Number nos casos em que é convertido em booleano: if, ||, &&, Boolean, !.
*/

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false porque 9007199254740992n e 9007199254740993n são desiguais

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true porque ambos são 9007199254740992
