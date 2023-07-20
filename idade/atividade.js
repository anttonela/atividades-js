
function mostrarTela(mensagem) {
    document.getElementById('resultado').innerHTML = mensagem;
}


function textoTela() {

    let nome = document.getElementById("nome").value;

    let idade = document.getElementById("idade").value;

    if (idade == 18) {
        mostrarTela(`Olá ${nome}! Você tem 18 anos`);
    }

    if (idade > 18) {
        mostrarTela("Olá " + nome + "! Você possue mais que 18 anos");
    }
    
    if (idade < 18) {
        mostrarTela("Olá " + nome + "! Você possue menos que 18 anos");
    }
}