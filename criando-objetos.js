//Formas de criar objetos no paradigma de programação orientada a objetos

//Literais
var jogador = {
    nome: 'Gabriel Barbosa',
    anoContratacao: 2019,
    numeroCamisa: 10,
    posicao: 'Atacante'
}

console.log(jogador);
console.log();

//Fábricas

function criarJogador(nome, anoContratacao, posicao, numeroCamisa) {
    return {
        nome,
        anoContratacao,
        posicao,
        numeroCamisa
    };
};

const jogador1 = criarJogador('Gabriel Barbosa', 2019, 'Atacante', 10);
console.log(jogador1);
console.log();

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
console.log();

//Construtores
//Funções que criam objetos
function Atleta(nome, anoContratacao, posicao, numeroCamisa) {//Por convenção usa-se letra maiúscula
    this.nome = nome;
    this.anoContratacao = anoContratacao;
    this.posicao = posicao;
    this.numeroCamisa = numeroCamisa;
    this.calculaTempoContrato = function(){
        return new Date().getFullYear() - this.anoContratacao;
    };
};

const atleta = new Atleta('Gabriel Barbosa', 2019, 'Atacante', 10);
console.log(atleta);
console.log();

console.log("Atleta: " + atleta.nome + 
            "\nCamisa: " + atleta.numeroCamisa +  
            "\nTempo de contrato: " + atleta.calculaTempoContrato() + " anos.");

console.log();

//Construtor Object()
const atleta2 = new Object();
atleta2.nome = "Pedro";
atleta2.anoContratacao = 2020;
atleta2.posicao = "Atacante";
atleta2.numeroCamisa = 9;
atleta2.calculaTempoContrato = atleta.calculaTempoContrato;//Não é uma boa prática

console.log("Atleta2: " + atleta2.nome +
    "\nCamisa: " + atleta2.numeroCamisa +  
    "\nTempo de contrato: " + atleta2.calculaTempoContrato() + " anos.");

console.log();

//Protótipos


//Classes