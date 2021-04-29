import { Funcionario } from "./Funcionario.js";

export class Tercerizados extends Funcionario{
    constructor(nome, cpf){
        super(nome,cpf);
    
    }

    atribuirSalario(valor){
        const ben = 1.02;
        return super._atribuirSalario(valor,ben);
    }
}