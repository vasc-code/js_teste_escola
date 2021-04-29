import { Aluno } from "./Aluno.js";

export class Doutorando extends Aluno{
    static numeroDeDoutorandos = 0;

    constructor(nome,num){
        super(nome,num,0);
        Doutorando.numeroDeDoutorandos += 1;
    }

    atribuirBolsa(valor){
        const mult = 2;
        return super._atribuirBolsa(valor,mult);
    }
}