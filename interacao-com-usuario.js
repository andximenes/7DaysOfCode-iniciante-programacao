let readlineSync = require('readline-sync');

let nome = readlineSync.question("Qual é o seu nome? ");
let idade = readlineSync.question("Quantos anos você tem? ");
let LinguagemDeProgramacao = readlineSync.question("Qual linguagem de programação você está estudando? ");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${LinguagemDeProgramacao}!`);

let gostaDeEstudar = readlineSync.questionInt(`Voce gosta de estudar ${LinguagemDeProgramacao}? Digite 1 para SIM ou 2 para NÃO `);

switch(gostaDeEstudar){
    case 1:
        console.log("1 > Muito bom! Continue estudando e você terá muito sucesso");
        break;
    case 2:
        console.log("2 > Ahh que pena... Já tentou aprender outras linguagens?")
    
        console.log("Digite 1 - [Sim] e 2 - para [Não]")

        let aprenderNovaLinguagem = readlineSync.questionInt(""); 

        switch(aprenderNovaLinguagem){
            case 1:
                console.log("ótimo, continue estudando!");
                break;
            case 2:
                console.log("Nunca é tarde para começar!"); 
                break;
            default:
                console.log("opcao invalida");
        }
}