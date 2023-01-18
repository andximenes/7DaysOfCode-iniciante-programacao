
let nome = prompt(" Olá, qual é o seu nome?"); 

let carreira = prompt(`${nome}, Qual área deseja seguir?
[1] - Front-End ou [2] - Back-End` );

let areaAtuacao = "";
let linguagemEscolhida = "";

if(carreira === "1"){
    areaAtuacao = "Front-End";
    let linguagem = prompt ("Escolha uma linguagem [1] - React ou [2] - Vue");

    if(linguagem === "1"){
        alert(`${nome}, Parabéns! você escolheu React como linguagem.`);
        linguagemEscolhida = "React";
    }else if(linguagem === "2"){
        alert(`${nome}, Parabéns! você escolheu Vue como linguagem.`)
        linguagemEscolhida = "Vue";
    }
}else if( carreira === "2"){
    areaAtuacao = "Back-End";
    let linguagem = prompt ("Escolha uma linguagem [1] - C# ou [2] - Java");

    if(linguagem === "1"){
        alert(`${nome}, Parabéns! você escolheu C# como linguagem.`);
        linguagemEscolhida = "C#";
    }else if(linguagem === "2"){
        alert(`${nome}, Parabéns! você escolheu Java como linguagem.`);
        linguagemEscolhida = "Java";
    }   
}

let escolha = prompt(`${nome}, você deseja continuar se especializando em 
${linguagemEscolhida}, ou prefere seguir para se tornar Fullstack? 
[1] - Especializar-me [2] - Tornar-me Fullstack`);

let destinoEscolhido = "";

if(escolha === "1"){
    destinoEscolhido = "Especialização";
}else if(escolha === "2"){
    destinoEscolhido = "Fullstack";
}

let listaTecnologias = [];
let continuar = "1";

while(continuar == "1"){
    tecnologias = prompt("Quais tecnologias gostaria de estudar?");

    listaTecnologias.push(tecnologias);
    
    continuar = prompt(`Você adicionou ${listaTecnologias} a sua lista de 
    de desejos. Gostaria de adcionar mais linguagens? [1] - Sim [2] - Não`);
}

alert(`${nome}, Obrigado por usar nosso programa!`);

document.getElementById("saudacao").innerHTML = `Olá, ${nome}`;
document.getElementById("carreira").innerHTML = `Área de atuação: ${areaAtuacao}`;
document.getElementById("profissionalizacao").innerHTML = `Linguagem escolhida: ${linguagemEscolhida}`;
document.getElementById("escolha").innerHTML = `Especializar-se na área de ${areaAtuacao} ou Fullstak? ${destinoEscolhido}`;
document.getElementById("lista").innerHTML = `linguagens que quero aprender: ${listaTecnologias}`;