let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

document.getElementById("saudacao").innerHTML = `Bem-vindo, ${nome}`;
document.getElementById("mensagem").innerHTML = `${nome}, você tem ${idade}, e já está aprendendo ${linguagem}`;

let estudar = prompt(`Você gosta de estudar ${linguagem}?
Responda [1] para SIM e [2] para NÃO`);

switch(estudar){
    case "1":
        alert("Muito bom! Continue estudando e você terá muito sucesso!");
        break;
    case "2":
        let qtdTentativas = 3;

        for(i = 1; i <= 3; i++){
            let aprender = prompt("Ahh que pena... Já tentou aprender outras linguagens? "
            + "digite SIM ou NÃO");
            
            if(aprender == "Sim" || aprender == "sim" ){
                alert("Que legal! continue estudando");
                break;
            }else if(aprender == "Não" || aprender == "não"){
                alert(`${nome}, nunca é tarde para aprender coisas novas!`);
                break;
            }else{
                alert("Opção inválida! " +
                `tentativa ${i} de ${qtdTentativas}`);
            }
        }
        
}