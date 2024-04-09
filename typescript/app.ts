
class Carro{

    private modelo: string
    private velocidade : number = 0

    constructor(modelo: string){
        this.modelo = modelo
    }

    public Acelerar():void {
        this.velocidade = this.velocidade + 10
    }
    public Parar():void {
        this.velocidade = 0
    }
    public Velocidade(): number{
        return this.velocidade
    }
}

/*Montar lita de carros */
let carroA = new Carro("Camaro")
let carroB = new Carro("Fusca")
let carroC = new Carro("Golf")

let listaCarros: Carro[] = [carroA,carroB,carroC]

class Concessionaria{
    private endereco : string
    private listaCarros : any

    constructor(endereco: string,listaCarros:any){
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    public FornecerEndereco(): any{
        return this.endereco
    }

    public MostrarlistaCarro(){
       return listaCarros
    }
}

class Pessoa{
    private nome:string
    private carro:Carro
    private carroPreferido:string

    
    constructor(nome: string ,carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizernome() {
        return this.nome
    }

    public dizerCarroPreferido():string {
        return this.carroPreferido
    }
    
    public comprarCarro(carro: Carro):void{
        this.carro = carro
    }

    public dizerCarroQuetem(): Carro{
         return this.carro
    }
}

let pessoa = new Pessoa("Aderbal","Fusca")
let concessssionaria = new Concessionaria("Rua da Ajuda",listaCarros)

concessssionaria.MostrarlistaCarro().map((carro: Carro) => {
    console.log(concessssionaria)

    if(carro['modelo'] == pessoa.dizerCarroPreferido()){
        pessoa.comprarCarro(carro)
    }
})