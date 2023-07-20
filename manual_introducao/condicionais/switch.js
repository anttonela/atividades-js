/*
    - SWITCH -
    
A estrutura condicional switch permite executar um bloco de código diferente de 
acordo com cada opção (cada case) especificada. Seu uso é indicado quando os 
valores a serem analisados nessas condições são pré-definidos. O default é usado 
como última condição.
*/

mes = "Maio";

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão!");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono!");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno!");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera!");
}
// imprime: Outono !