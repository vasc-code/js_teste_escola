import { Aluno } from "./Aluno.js";

export class Graduando extends Aluno{
    static numeroDeAlunos = 0;

    constructor(nome,num){
        super(nome,num,0);
        Graduando.numeroDeAlunos += 1;
    }

    atribuirBolsa(valor){
        const mult = 1.5;
        return super._atribuirBolsa(valor,mult);
    }
}