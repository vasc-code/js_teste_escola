import { Funcionario } from "./Funcionario.js";

export class Administracao extends Funcionario{
    constructor(nome, cpf){
        super(nome,cpf);
    
    }

    atribuirSalario(valor){
        const ben = 1.15;
        return super._atribuirSalario(valor,ben);
    }

    salarioLiquido(){
        const taxa = 0.10;
        return super._salarioLiquido(taxa);
    }
}