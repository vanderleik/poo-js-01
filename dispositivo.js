/**
 * Crição de um objeto chamado celular que tem como atributos o fabricante, modelo, situação e volume. 
 * Possui ainda as funções de ligar, desligar, aumentar volume e baixar volume.
 * 
 * ******************
 * celular          *
 * ******************
 * fabricante       *
 * modelo           *
 * situacao         *
 * ******************
 * ligar()          *
 * desligar()       *
 * aumentarVolume() *
 * baixarVolume()   *
 * ****************** 
 */

var celular = {
    fabricante: "Samsung",
    modelo: "A31",
    situacao: "off",
    volume: 0,
    
    ligar() {
        if (celular.situacao == "off") {
            celular.situacao = "on";
        }
    },

    aumentarVolume(){
        if (celular.situacao == "on") {
            celular.volume ++;
        }
        console.log("O celular precisa estar ligado para aumentar ou baixar o volume");
    },
    
    baixarVolume() {
        if (celular.situacao == "on") {
            celular.volume --;
        }
        console.log("O celular precisa estar ligado para aumentar ou baixar o volume");
    },

    desligar() {
        if (celular.situacao === "on") {
            celular.situacao = "off";
        }
    }    
}

console.log("Descrição :" + celular.fabricante + " - " + celular.modelo + " - " + celular.situacao + " - " + celular.volume);
console.log("Situação inicial: " + celular.situacao);
celular.ligar();
console.log("Nova situação: " + celular.situacao);
console.log("Volume inicial: " + celular.volume);
celular.aumentarVolume();
console.log("Novo volume: " + celular.volume);
celular.aumentarVolume();
console.log("Novo volume: " + celular.volume);
celular.aumentarVolume();
console.log("Novo volume: " + celular.volume);
celular.baixarVolume();
console.log("Novo volume: " + celular.volume);
celular.desligar();
console.log("Nova situação: " + celular.situacao);
console.log();
celular.aumentarVolume();