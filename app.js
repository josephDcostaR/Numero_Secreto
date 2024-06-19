let mensagemDeBoasVindas = 'Boas vindas ao App: Numero Secreto';
alert(mensagemDeBoasVindas);



const numeroSecreto = 29;

let tentativa = prompt('Escolha um numero entre 1 e 30: ');

if (tentativa > numeroSecreto) {
  console.log("Que pena foi um chete muito alto.")
}
else if (tentativa < numeroSecreto) {
  console.log("Que pena foi um chute muito baixo.")
}
else {
  console.log("Parabens você acertou o Numero Secreto é " + numeroSecreto + ". ")
}