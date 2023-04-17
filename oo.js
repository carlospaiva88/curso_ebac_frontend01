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

function Gerente(nome){
    Funcionario.call(this, nome,"Gerente", 15000)
}
function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 1900)
}

function Trainee(nome){
    Funcionario.call(this, nome, "trainee", 1100 )
}


const funcionario1 = new Funcionario("Fernanda", "dev full-stack", 10000, "Senior");
const funcionario2 = new Funcionario("Carlos", "dev front-end", 8000, "pleno");
const funcionario3 = new Funcionario("Josias", "design UX", 3500, "junior");
const funcionario4 = new Estagiario("Amanda");
const funcionario5 = new Trainee("Reginaldo")
const funcionario6 = new Gerente("Rosivaldo");


funcionario4.dizCargo();
console.log(funcionario4.getSalario())



