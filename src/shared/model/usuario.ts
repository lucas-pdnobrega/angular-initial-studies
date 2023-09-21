export class Usuario {
    nome:string;
    cpf:number;
    idade:number;

    constructor(nome:string, cpf:number, idade:number) {
        this.nome = nome;  
        this.cpf = cpf;
        this.idade = idade;
    }
}