// 1. O Porteiro Virtual (Usando +prompt e if)
// Objetivo: Transformar a entrada do usuário em número para realizar uma validação de idade.
// - Crie uma variável chamada idadeUsuario e use o +prompt("Qual é a sua idade?") para capturar a resposta já convertida para número.
// - Crie uma estrutura if para verificar se a idade é maior ou igual (>=) a 18.
// - Se for verdadeiro, exiba no console: "Acesso liberado! Divirta-se."
// - Se NÃO for verdadeiro, exibir: "Acesso negado. Você é menor de idade." caso a condição seja falsa.

let idadeUsuario = +prompt('Digite a sua idede:')

if (idadeUsuario >= 18) {
  console.log("Acesso liberado! Divirta-se.");
} else {
  console.log("Acesso negado. Você é menor de idade.");
}
console.log("")


// 2. Sistema de Login Secreto (Usando prompt normal)
// Objetivo: Mostrar que nem sempre queremos converter para número. Senhas e textos precisam continuar como Strings.
// - Crie uma variável const senhaCorreta com o valor "front123".
// - Crie uma variável senhaDigitada e use apenas prompt("Digite a senha de acesso:") (sem o sinal de +, pois a senha contém letras).
// - Use um if para verificar se a senhaDigitada é estritamente igual (===) à senhaCorreta.
// - Se for igual, imprima "Login efetuado com sucesso!".
// - Se NÃO for igual, imprima "Senha incorreta. Tente novamente."

const senhaCorreta = "front123";
let senhaDigitada = prompt("Digite a senha de acesso:");

if (senhaDigitada === senhaCorreta) {
  console.log("Login efetuado com sucesso!");
}

if (senhaDigitada !== senhaCorreta) {
  console.log("Senha incorreta. Tente novamente.");
}
console.log("")


// 3. A Loja com Desconto Surpresa (Lógica de estado)
// Objetivo: Usar o if não apenas para exibir mensagens, mas para modificar o valor de uma variável em tempo de execução.
// - Peça para o usuário digitar o valor total da compra usando: let valorCompra = +prompt("Digite o valor da compra:"). Lembre-se de usar let porque o valor pode mudar!
// - Crie um if que verifique se o valor da compra é maior que 100 (> 100).
// - Dentro do bloco do if, dê um desconto de 10 reais. (Dica: valorCompra = valorCompra - 10).
// - Fora do if, dê um console.log mostrando o valor final que o cliente deve pagar (ex: "O total a pagar é: " + valorCompra).
// - Ex-plicação para a turma: Se o cliente digitar 50, o if é ignorado e ele paga 50. Se digitar 150, o if entra em ação e altera o valor para 140 antes do console.log final!

let valorCompra = +prompt("Digite o valor da compra:");

if (valorCompra > 100) {
  valorCompra = valorCompra - 10;
}

console.log("O total a pagar é: " + valorCompra); //Esta linha sempre será executada no final, exibindo 50 (sem desconto) ou 140 (com desconto).
console.log("")


// 4. Bônus de Pontuação por Compra
// Objetivo: Crie um programa em JavaScript que receba a quantidade de produtos comprados em uma variável quantidade e o valor gasto em valorGasto. Calcule um bônus de pontos no programa de fidelidade seguindo estas regras usando apenas if:
// - Se a pessoa comprou 5 ou mais produtos, ela ganha 50 pontos extras.
// - Se o valor gasto for maior ou igual a 200, ela ganha mais 100 pontos extras.
// - As regras são acumulativas (uma pessoa pode ganhar os dois bônus se atender a ambas as condições).
// - Comece a pontuação base com 10 pontos e exiba o total de pontos no final.

let quantidade = +prompt("Digite a quantidade de produtos comprados:");
let valorGasto = +prompt("Digite o valor total gasto:");

let pontos = 10;

if (quantidade >= 5) {
  pontos = pontos + 50;
}

if (valorGasto >= 200) {
  pontos = pontos + 100;
}

console.log("Total de pontos acumulados: " + pontos);
console.log("")


// 5. Bônus por Meta Batida
// Objetivo: Crie um programa que calcule o salário final de um vendedor. Ele possui um salário base em salarioBase, um total de vendas em totalVendas e uma nota de avaliação em notaAvaliacao (de 0 a 10).
// Se o vendedor vendeu mais de 5000E tirou uma nota maior ou igual a 8, ele ganha um bônus de 15% sobre o salário base.
// Calcule e exiba o salarioFinal no console.

let salarioBase = +prompt("Digite o salário base do vendedor:");
let totalVendas = +prompt("Digite o total de vendas realizadas:");
let notaAvaliacao = +prompt("Digite a nota de avaliação (0 a 10):");

let salarioFinal = salarioBase;

if (totalVendas > 5000 && notaAvaliacao >= 8) {
  salarioFinal = salarioBase + (salarioBase * 0.15);
}

console.log("O salário final do vendedor é: " + salarioFinal);


// 6. Taxa de Entrega Especial
// Objetivo: Crie um programa para calcular o valor total de um pedido de delivery com base no valorPedido e na distanciaKm. A taxa padrão de entrega é de R$ 10,00.
// - Se o valor do pedido for menor que 30  OU a distância for maior que 10 km, será cobrada uma taxa extra de R$ 5,00 além da taxa padrão.
// - Calcule e exiba o valorTotal (pedido + taxas) no console.

let valorPedido = +prompt("Digite o valor do pedido:");
let distanciaKm = +prompt("Digite a distância da entrega em km:");


let taxaEntrega = 10;

if (valorPedido < 30 || distanciaKm > 10) {
    taxaEntrega = taxaEntrega + 5;
}

let valorTotal = valorPedido + taxaEntrega;
console.log("O valor total do pedido com entrega é: R$ " + valorTotal);

