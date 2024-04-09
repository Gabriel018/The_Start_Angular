var Carro = /** @class */ (function () {
    function Carro(modelo) {
        this.velocidade = 0;
        this.modelo = modelo;
    }
    Carro.prototype.Acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.Parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.Velocidade = function () {
        return this.velocidade;
    };
    return Carro;
}());
/*Montar lita de carros */
var carroA = new Carro("Camaro");
var carroB = new Carro("Fusca");
var carroC = new Carro("Golf");
var listaCarros = [carroA, carroB, carroC];
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    Concessionaria.prototype.FornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.MostrarlistaCarro = function () {
        return listaCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carro) {
        this.nome = nome;
        this.carro = carro;
    }
    Pessoa.prototype.dizernome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carro;
    };
    Pessoa.prototype.comprarCarro = function () {
    };
    Pessoa.prototype.dizerCarroQuetem = function () {
    };
    return Pessoa;
}());
var concessssionaria = new Concessionaria("Rua da Ajuda", listaCarros);
concessssionaria.MostrarlistaCarro().map(function (carro) {
    console.log(concessssionaria);
});
