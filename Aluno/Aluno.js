export class Aluno{
    constructor(nome,num,bolsa){
        if(this.constructor  ==  Aluno){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!");
        }
        this._nome = nome;
        this._num = num;
        this._bolsa = bolsa;
        this._senha;
    }

    get nome(){
        return this._nome;
    }

    get num(){
        return this._num;
    }

    get bolsa(){
        return this._bolsa;
    }

    atribuirBolsa(valor){
        throw new Error("O método atribuir bolsa do aluno é abstrato.");
    }

    _atribuirBolsa(valor,mult){
        const bolsa = mult * valor;
        this._bolsa=bolsa;
        return bolsa;
    }

    diminuirBolsa(valor){
        if(this._bolsa>=valor){
            this._bolsa-=valor;
            return this._bolsa;
        }

        return console.log("O valor não pode ser subtraido da bolsa");
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
}