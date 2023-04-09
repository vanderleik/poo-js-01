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
console.log("Protótipos");
console.log("Tipo de objeto: " + atleta.constructor.name);
console.log("Tipo de objeto: " + atleta2.constructor.name);

function descobreObjeto(objeto) {
    if ('Object' == objeto.constructor.name) {
        console.log('O objeto é um objeto raiz');
    } else {
        console.log('O objeto é um objeto do tipo ' + objeto.constructor.name);
    }
}

console.log(descobreObjeto(atleta));
console.log(descobreObjeto(atleta2));
console.log(descobreObjeto(pessoa1));
console.log();
console.log(Object.getPrototypeOf(atleta));//Funciona melhor no console do navegador
console.log(Object.getPrototypeOf(atleta2));
console.log();
const pessoa2 = Object.create(atleta2);

console.log("Pessoa2: " + pessoa2.nome +
    "\nCamisa: " + pessoa2.numeroCamisa +  
    "\nTempo de contrato: " + pessoa2.calculaTempoContrato() + " anos.");

pessoa1.saudar = function(){
    console.log("Olá!!!");
};
console.log();

console.log(pessoa1.saudar());
Atleta.prototype.saudar = function(){
    console.log("Olá, mundo!!!");
};
    
console.log(atleta.saudar());
console.log();

//Classes

class Vinho {
    constructor(uva, safra, preco) {
        this.uva = uva;
        this.safra = safra;
        this.preco = preco;
    };
    
    ola() {
        console.log("Olá, eu sou " + this.uva + ", um vinho com as seguintes características:");
    };

    calculaIdade() {
        return new Date().getFullYear() - this.safra;
    };
};

const vinho1 = new Vinho("Merlot", 2020, 50);
console.log(vinho1.ola() +
            "\nUva: " + vinho1.uva +
            "\nSafra: " + vinho1.safra +
            "\nPreço: R$ " + vinho1.preco +
            "\nIdade: " + vinho1.calculaIdade() + " anos");

console.log();

class Espumante extends Vinho {
    constructor(nome, safra, preco, regiao) {
        super(nome, safra, preco);
        this.regiao = regiao;
    };

};

const espumante = new Espumante("Oremus", 2019, 70, "Vale dos Vinhedos");
console.log(espumante);