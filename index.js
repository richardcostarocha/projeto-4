const prompt = require('prompt-sync')();
var sair;
var totalVotos = [0, 0, 0, 0, 0];

function autorizaVoto(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    if (idade < 16) {
        return "negado"
    } else if (idade < 18) {
        return "opcional"
    } else {
        return "obrigatorio"
    }
}

function votacao(autorizacao, voto) {
    if (autorizacao == "negado") {
        console.log("Você não pode votar")
    } else {
        totalVotos[voto - 1]++;
    }
}

function exibirResultados(totalVotos) {
    console.log(`O total de votos para o candidato 1 é ${totalVotos[0]}`);
    console.log(`O total de votos para o candidato 2 é ${totalVotos[1]}`);
    console.log(`O total de votos para o candidato 3 é ${totalVotos[2]}`);
    console.log(`O total de votos nulos é ${totalVotos[3]}`);
    console.log(`O total de votos em branco é ${totalVotos[4]}`);
    if (totalVotos[0] > totalVotos[1] && totalVotos[0] > totalVotos[2]) {
        console.log("O candidato 1 venceu a votação");
    } else if (totalVotos[1] > totalVotos[0] && totalVotos[1] > totalVotos[2]) {
        console.log("O candidato 2 venceu a votação");
    } else if (totalVotos[2] > totalVotos[1] && totalVotos[2] > totalVotos[0]) {
        console.log("O candidato 3 venceu a votação");
    }
}
do {
    let anoNascimento = +prompt("diga o ano do seu nascimento: ")
    let autorizacao = autorizaVoto(anoNascimento);
    console.log(`
    1 = Candidato 1
    2 = Candidato 2
    3 = Candidato 3
    4 = Voto Nulo
    5 = Voto em Branco
    `);
    let voto = prompt("escolha seu voto: ");
    console.clear();
    votacao(autorizacao, voto);
    sair = prompt("ainda tem alguem para votar? ");
}
while (sair != "nao");
console.clear();
exibirResultados(totalVotos);