//Herança

class Pessoa {
    constructor(nome, anoNascimento, profissao) {
        this.nome = nome;
        this.anoNascimento = anoNascimento;
        this.profissao = profissao;
    };

    ola() {
        return console.log("Olá, ");
    }

    calculaIdade(){
        return new Date().getFullYear() - this.anoNascimento;
    };
}

class Estudante extends Pessoa {
    constructor(nome, anoNascimento, profissao, matricula) {
        super(nome, anoNascimento, profissao);
        this.matricula = matricula;
    };

    ola() {
        super.ola();
        console.log("colegas!");
    }
};

const aluno = new Estudante('Vanderlei', 1975, "Estudante", 1234);
console.log(aluno);
console.log("Idade: " + aluno.calculaIdade() + " anos.");
console.log(aluno.ola());
console.log();

const pessoa1 = new Pessoa();
const pessoa2 = pessoa1;
pessoa1.anoNascimento = 1980;
pessoa2.anoNascimento = 1982;//Como as duas pessoas estão apontando para o mesmo espaço na memória, o anoNascimeto de ambos será 1982.

console.log(pessoa1);
console.log(pessoa2);
console.log();

pessoa1.formacao = "Economia";//Ambas as pessoas terão esse novo atributo
console.log(pessoa1);
console.log(pessoa2);
console.log();

const pessoa3 = new Pessoa('Bon Jovi', 1970, 'Musicista');
pessoa3.formacao = 'Escola de música de Nashville';
console.log(pessoa3);
pessoa3.profissao = 'Rockeiro';
console.log(pessoa3);
console.log();

delete pessoa2.formacao;
console.log(pessoa1);
console.log(pessoa2);
console.log();

class validaCpf {
    static TAMANHO_CPF = 11;
    static validar(tamanho) {//Com o static eu não instancio o objeto pra usar o método validar()
        if (tamanho == this.TAMANHO_CPF) {
            return true;
        } else {
            return false;
        }
    };
};

console.log('CPF Válido: ' + validaCpf.validar("12345678".length));
console.log('CPF Válido: ' + validaCpf.validar("12345678901".length));

console.log(validaCpf.TAMANHO_CPF);