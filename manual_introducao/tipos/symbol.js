/*
    - Symbol -

Um Symbol é um tipo primitivo que armazena um valor único. Seu propósito é 
servir como um identificador único.
*/

const meuSymbol = Symbol();

const meuSymbol2 = Symbol('meu simbolo');

// mesmo que crie de forma igual teremos Symbols diferentes.
Symbol('meu simbolo') === Symbol('meu simbolo'); // false
