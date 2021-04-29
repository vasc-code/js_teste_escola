import { Funcionario } from "./Funcionario.js";

export class Reitoria extends Funcionario{
    constructor(nome, cpf){
        super(nome,cpf);
    
    }

    atribuirSalario(valor){
        const ben = 1.3;
        return super._atribuirSalario(valor,ben);
    }
}