import { Funcionario } from "./Funcionario.js";

export class Professores extends Funcionario{
    constructor(nome, cpf){
        super(nome,cpf);
    
    }

    atribuirSalario(valor){
        const ben = 1.1;
        return super._atribuirSalario(valor,ben);
    }
}