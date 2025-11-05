// // Uma classe é como um molde ou modelo que define como um objeto deve ser

// class Pessoa {
//     name: string; 
//     age: number; 

//     // Define os parâmetros que o objeto precisa receber ao ser criado.
//     constructor(name:string,age:number){
//        this.name = name;
//        this.age = age;
//     }
// } 

// const pessoa1 = new Pessoa("Marcos", 26);

// console.log(pessoa1); 

class Isqueiro {
   private volume:number; 
   private carga:number; 
   private cor:string; 
   private durabilidade:number;  

   constructor(volume:number, carga:number,cor:string, durabilidade:number){
    this.volume = volume;
    this.carga = this.volume;
    this.cor = cor; 
    this.durabilidade = durabilidade;
   }
   public acender(duracaoEmSegundos:number){
    this.durabilidade--; 

    const cargaGasta = 5 * duracaoEmSegundos; 

    this.carga = this.carga - cargaGasta; 

    if(this.carga < 0 ) {
        this.carga = 0; 
        console.warn(` o isqueiro de cor ${this.cor}acabou no meio do uso!`);
    }

   }
}  



const isqueiro = new Isqueiro(50,100,"verde",150) 

isqueiro.acender(10) 

console.log(isqueiro)