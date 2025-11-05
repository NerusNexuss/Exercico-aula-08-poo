// 1 - Criar uma classe ContaBancária e permitir as operações de:
//     extrato(): number
//     saque(number)
//     deposito(number)

// 2 - Criar uma classe Produto e permitir que um desconto seja calculado
//     A classe possui uma propriedade de preço e de desconto,
//     o método calcularPreco() deve levar isso em consideração
//     e retornar o preço final para se comprar aquele item 

class ContaBancaria{
    
    private saldo:number;

    constructor(saldo:number){
        this.saldo = saldo;
    } 
    public verExtrato(){ 
     
        return console.log(`seu saldo é ${this.saldo}`);

    } 

    public saqueConta(saque:number){
        this.saldo - saque; 
        return console.log(`Você sacou ${saque}`);
    } 

    public depositoConta(deposito:number){
        this.saldo + deposito; 
        return console.log(`Você depositou ${deposito}`);
    }

} 

const contaBancaria1 = new ContaBancaria(100); 

contaBancaria1.verExtrato();

