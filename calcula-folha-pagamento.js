/**
 * Programa que calcula folha de pagamento. É criada uma função que recebe os valores de um objeto e apartir desses valores efetua o cálculo retornando o valor do salário líquido desse empregado. 
 * 
 */
function calculadora(salarioHora, horasContratadas, horasExtras, descontos) {
    const salarioBase = salarioHora * horasContratadas;
    const salarioBruto = salarioBase + horasExtras;
    const salarioLiquido = salarioBruto - descontos;
    return salarioLiquido;
}

var empregado = {
    nome: "Slash",
    funcao: "Guitarrista",
    departamento: "Música",
    salarioHora: 500,
    horasContratadas: 8,
    horasExtras: 2,
    descontos: 80
};

var salarioLiquido = calculadora(empregado.salarioHora, empregado.horasContratadas, empregado.horasExtras, empregado.descontos);
console.log(empregado);
empregado.salarioLiquido = {salarioLiquido: salarioLiquido};
console.log(empregado.salarioLiquido);