

// class - constructor - new - if - console.log

class instrumentos {
    constructor(categoria, valor) {
        this.categoria = categoria
        this.valor = valor
    }
}

instrumento1 = new instrumentos('Violão', 300);
instrumento2 = new instrumentos("Violino", 1100);
instrumento3 = new instrumentos("Bateria", 900);
instrumento4 = new instrumentos("Piano", 2500);
instrumento5 = new instrumentos("Guitarra", 600);
console.log(instrumento1);
console.log(instrumento2);
console.log(instrumento3);
console.log(instrumento4);
console.log(instrumento5);

//  Objetos  //

class objetos {

    constructor(categoria, tipo, valor) {
        this.categoria = categoria;
        this.tipo = tipo;
        this.valor = valor;

        if (valor <= 0) {
            throw new Error("Valor inválido: O valor deve ser maior que zero.")
        }
    }
}

cordaViolao = new objetos("Corda para violão", "nova", 20);
cordaViolino = new objetos("Corda para violino", "nova", 40);
cordaGuitarra = new objetos("Corda para guitarra", "nova", 40);
bancoBateria = new objetos("Banco para bateria", "usado", 100);
bancoPiano = new objetos("Banco para piano", "usado", 100);

console.log(cordaViolao);
console.log(cordaViolino);
console.log(cordaGuitarra);
console.log(bancoBateria);

// teste //

let listaItens = [];

function clicarAdicionarProdutos() {
    console.log("adicionar")
}

function valorTabela() {
    const valorTabela = documenty.getElementById("Valor máximo");

}

function adicionarCorda() {
    const adicionarCorda = documenty.getElementById("Valor máximo");
    newAdicionarCorda(new objetos("cor", "tipo", "valor"));

}

// Botão instrumento + para aparecer na tela //


function adicionarLancamento() {
    const instrument = document.getElementById("add-instrumento").value;
    listaItens.push(instrument);

    let desenhaNaTela = '<ul>';
    listaItens.forEach(item => {
        desenhaNaTela += `<li>${item}</li>`;
    });
    desenhaNaTela += '</ul>';

    document.getElementById("lista-itens").innerHTML = desenhaNaTela;

}

window.console.log("eu sou o console")


const valor = document.getElementById("add-valor");


const addInstrument = document.querySelector("#add-instrument");
console.log(addInstrument);

addUserText.textContent = "Instrumento desejado";

const myForm = document.querySelector(".container #my-form");
console.log(myForm);
