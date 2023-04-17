function Pessoa (nome){
    this.nome = nome
}
function Funcionario(nome, cargo, salario, posicao){
    this.nome = nome;
    this.cargo = cargo;
    let _salario = salario;
    this.posicao = posicao;

    this.getSalario = function(){
        return _salario;
        // return `O salario de ${this.nome} é de ${_salario}`
    }
    this.setSalario = function(valor){
        if(typeof valor === 'number'){
        _salario = valor;
        }
    }
    this.dizCargo = function(){
        console.log(this.cargo);
    }
    this.dizPosicao = function(){
        console.log(this.posicao);
    }
    
}


function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 1900)
}
function Gerente(nome){
    Funcionario.call(this, nome,"Gerente", 15000)
}


const funcionario1 = new Funcionario("Fernanda", "dev front-end", 10000, "Senior");
const funcionario2 = new Funcionario("Carlos", "full stack", 8000, "pleno");
const funcionario3 = new Funcionario("Josias", "design UX", 3500, "junior");
const funcionario4 = new Estagiario("Amanda");
const funcionario5 = new Gerente("Rosivaldo");


funcionario3.dizCargo();
console.log(funcionario3.getSalario())
funcionario3.dizPosicao();


