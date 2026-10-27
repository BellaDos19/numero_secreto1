alert('Bem vindo ao jogo do número secreto! ');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt("digite um número de 1 a 100")


    if (chute == numeroSecreto){
        break;
        alert (`Você Acertou! O número secreto é ${numeroSecreto} com o total de ${tentativas} tentativas!`)
    } else {
        if (chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
        } else { 
            alert (`numero secreto e maior que ${chute} `);
        }
    } 
    tentativas++;
}

