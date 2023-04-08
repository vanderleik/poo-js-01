//Formas de criar objetos no paradigma de programação orientada a objetos

//Literais
var jogador = {
    nome: 'Gabriel Barbosa',
    anoContratacao: 2019,
    posicao: 'Atacante'
}

console.log(jogador);

//Fábricas

function criarJogador(nome, anoContratacao, posicao) {
    return {
        nome,
        anoContratacao,
        posicao
    };
};

const jogador1 = criarJogador('Gabriel Barbosa', 2019, 'Atacante');
console.log(jogador1);

function criarPessoa (salarioBase, valorHorasExtras, qtHorasExtras) {
    return {
        salarioBase,
        valorHorasExtras,
        qtHorasExtras,
        calculaSalario: function(){
            return this.salarioBase + (this.qtHorasExtras * this.valorHorasExtras);
        }
    };
};

const pessoa1 = criarPessoa(5000, 100, 10);
console.log(
            "Salário base: " + pessoa1.salarioBase + 
            "\nValor horas extras: " + pessoa1.valorHorasExtras + 
            "\nQuantidade de horas extras: " + pessoa1.qtHorasExtras +
            "\nSalário final: " + pessoa1.calculaSalario());


//Protótipos
//Classes