import { Aluno } from "./Aluno/Aluno.js";
import { Doutorando } from "./Aluno/Doutorando.js";
import {Graduando} from "./Aluno/Graduando.js";
import { Mestrando } from "./Aluno/Mestrando.js";
import { Administracao } from "./Funcionario/Adminitracao.js";
import { Professores } from "./Funcionario/Professores.js";
import { Reitoria } from "./Funcionario/Reitoria.js";
import { Tercerizados } from "./Funcionario/Tercerizados.js";
import { SistemaAutentica } from "./SistemaAutentica.js";

const graduando = new Graduando("Rafael",123);
const doutorando = new Doutorando("Pedro",456);
const mestrando = new Mestrando("João",789);


graduando.atribuirBolsa(100);
doutorando.atribuirBolsa(100);
doutorando.diminuirBolsa(100);
mestrando.atribuirBolsa(100);
mestrando.diminuirBolsa(50);

graduando.cadastrarSenha("000");
const logado = SistemaAutentica.login(graduando,"0000");
console.log(logado);

console.log(graduando);
console.log(doutorando);
console.log(mestrando);
console.log(Doutorando.numeroDeDoutorandos);
console.log(Graduando.numeroDeAlunos);
console.log(Mestrando.numeroDeMestrandos);

console.log("\n\n");

const terc = new Tercerizados("Kauan",12345678900);
terc.atribuirSalario(1000);
console.log(terc);

const prof = new Professores("Felipe",12345678900);
prof.atribuirSalario(1000);
console.log(prof);

const adm = new Administracao("Raul",12345678900);
adm.atribuirSalario(1000);
console.log(adm);
console.log(adm.salarioLiquido());

const rei = new Reitoria("Raul",12345678900);
rei.atribuirSalario(1000);
console.log(rei);