export class Funcionario{
    constructor(nome,cpf){
        if(this.constructor  ==  Funcionario){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!");
        }
        this._nome = nome;
        this._cpf = cpf;
        this._senha;
        this._salario = 0;

    }

    get nome(){
        return _nome;
    }

    get cpf(){
        return _cpf;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    atribuirSalario(valor){
        throw new Error("O método atribuir salario do funcionario é abstrato.");
    }

    _atribuirSalario(valor,ben){
        const sal = valor * ben;
        this._salario = sal;
        return sal;
    }

    salarioLiquido(porc){
        throw new Error("O método retido na fonte do funcionario é abstrato.");
    }

    _salarioLiquido(porc){
        const salLiq = this._salario - (this._salario*porc);
        return salLiq;
    }
}