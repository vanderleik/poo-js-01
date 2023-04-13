//Visibilidade
//Variáveis locais
function PessoaComVariaveisLocais() {
    let nome = 'Mano Menezes';
    let anoDeNascimento = 1970;
    let profissao = 'Técnico de Futebol';
    this.calculaIdade = function(){
        return new Date().getFullYear() - anoDeNascimento;
    };
};

const pessoa1 = new PessoaComVariaveisLocais();
console.log(pessoa1);//Somente a função calculaIdade() será mostrada no console. As variáveis iniciadas com let são locais.
console.log(pessoa1.calculaIdade());

//Identificadores pré fixados
function Pessoa() {
    this.nome = 'Mano Menezes';
    this.anoDeNascimento = 1970;
    this.profissao = 'Técnico de Futebol';
    this.calculaIdade = function(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

class Estudante extends Pessoa {
    #matricula;//Qualquer atributo privado recebe o #
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;        
    };
    
    getMatricula() {
        return this.#matricula;
    }

    setMatricula(value) {
        this.#matricula = value;
    };

    ola() {
        super.ola();
        console.log("colega");
    };
};

const aluno = new Estudante("Jorge Jesus", 1958, "Estudante", 12345678);
console.log(aluno);//A matrícula não irá aparecer  porque é privada
console.log("Matrícula: " + aluno.getMatricula()); 

aluno.setMatricula(111111111);
console.log("\nMatrícula alterada: " + aluno.getMatricula());
console.log();

//Associação entre objetos
class Vinho {
    constructor(nome, safra, uva, coloracao, preco){
    this.nome = nome;
    this.safra = safra;
    this.uva = uva;
    this.coloracao = coloracao;
    this.preco = preco;
    this.idade = function() {
        return new Date().getFullYear() - this.safra;
    };
};
    
};

class VinhoTinto extends Vinho {
    #codigo;
    produtor;
    constructor(codigo, nome, safra, uva, coloracao, preco, produtor) {
        super(nome, safra, uva, coloracao, preco);
        this.#codigo = codigo;        
        this.produtor = produtor;
    };
    
    getCodigo() {
        return this.#codigo;
    }

    setCodigo(value) {
        this.#codigo = value;
    };
};

class Produtor {
    #codigoProdutor;
    vinhos = [];
    constructor(codigoProdutor, nomeProdutor, origem) {
    this.nomeProdutor = nomeProdutor;
    this.origem = origem;
    this.#codigoProdutor = codigoProdutor;
    };

    getCodigoProdutor() {
        return this.#codigoProdutor;
    };

    setCodigoProdutor(value) {
        this.#codigoProdutor = value;
    };

    addVinhos(vinho){
        this.vinhos.push(vinho);
    };

};

const vinho1 = new VinhoTinto(1, 'Cabernet Sauvignon Valle Del Maipo', 2019, 'Cabernet Sauvignon', 'Tinto', 79.90);
vinho1.produtor = "De Martino";
const produtor1 = new Produtor(1, "De Martino", "Chile");
produtor1.addVinhos(vinho1);

const vinho2 = new VinhoTinto(2, 'Organic Reserve Cabernet Sauvignon Valle Del Maipo', 2016, 'Cabernet Sauvignon', 'Tinto', 69.90);
vinho2.produtor = "De Martino";
produtor1.addVinhos(vinho2);

const idadeVinho = vinho1.idade();

console.log(
    "Código do Vinho: " + vinho1.getCodigo() + 
    "\nProdutor: " + vinho1.produtor +
    "\nNome: " + vinho1.nome +
    "\nSafra: " + vinho1.safra +
    "\nUva: " + vinho1.uva +
    "\nColoração: " + vinho1.coloracao +
    "\nIdade: " + idadeVinho + " anos" +
    "\nPreço: R$ " + vinho1.preco);
        
console.log("***********Vinhos do Produtor 1:***********");
console.log(
    "Código do Produtor: " + produtor1.getCodigoProdutor() +
    "\nNome do Produtor: " + produtor1.nomeProdutor +
    "\nOrigem: " + produtor1.origem);
    console.log();

for (var i = 0; i < produtor1.vinhos.length; i++) {
    console.log(produtor1.vinhos[i]);   
};