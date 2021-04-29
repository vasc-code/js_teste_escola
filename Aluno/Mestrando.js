import { Aluno } from "./Aluno.js";

export class Mestrando extends Aluno{
    static numeroDeMestrandos = 0;

    constructor(nome,num){
        super(nome,num,0)
        Mestrando.numeroDeMestrandos += 1;
    }

    atribuirBolsa(valor){
        const mult = 3.5;
        return super._atribuirBolsa(valor,mult);
    }
}