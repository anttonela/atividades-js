/*
    - Objeto -

Um objeto é um valor na memória que possivelmente é referenciado por um identificador.
*/

//criando objeto | objeto guarda valor dentro de uma propriedade
const person = {
    firstName: "Elvis",
    lastName: "Presley",
    age: "42",
    hobbies: ['cantar', 'dançar', 'atuar'],
    dog: {
        name: "Simba",
        age: 4
    }
};

/*
const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;
*/

/*
//DESTRUCTURING
//mesma coisa que acima
//const { firstName, lastName, age, hobbies } = person;
//pode renomear
const { firstName: primeiroNome, lastName, age, hobbies } = person;
console.log(primeiroNome);

//console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
*/

//acessar valor dentro da lista de hobbies
console.log('\nO valor 2 de person (hobbies) é: ' + person.hobbies[2]);

// adicionando novas propriedades ao objeto
//person.dog = "Simba";
//console.log(person);

//adicionando propriedades ao person - acrescentou no objeto o dog

//verificando as novas propriedades
console.log('\nIdade do cachorro: ' + person.dog.age);
console.log('\nNome do cachorro: ' + person.dog.name);

//DESTRUCTING de dog
const { 
    firstName: primeiroNome, 
    lastName, 
    age, 
    hobbies, 
    dog:{ name: dogName } 
} = person;

console.log('\nPrimeiro nome: ' + primeiroNome);
console.log('Último nome: ' + lastName);
console.log('Idade: ' + age);
console.log('Hobbies: ' + hobbies);

//LISTA CONTENDO VÁRIOS OBJETOS

const todos = [
    {
        id: 1,
        description: "Estudar programação",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "treinar",
        isCompleted: true,
    },
];

//acessar ultimo index
console.log('\nAcessando o último index do array todos: ' + todos[2]);

//acessa dentro de description = treinar
console.log('\nO que tem dentro de todos (2) description é: ' + todos[2].description);