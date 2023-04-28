// const alunos = ['Carlos', 'Maria', 'Jose', 'Clodovil' ];
// const nota = ['2','4','6', '8', '10']
// const aluno1 = {
//     nome: 'carlos',
//     curso: 'full-stack',
//     nota: '8'
// }
// const aluno2 = {
//     nome: 'jose',
//     curso: 'front-end',
//     nota: '4'
// }
// const aluno3 = {
//     nome: 'clodovil',
//     curso: 'design',
//     nota: ' 6'
// }
// const aluno4 = {
//     nome: 'maria',
//     curso: 'fotografia',
//     nota: '10'
// }

// function retornaMedia(){
//     return alunos.nota >= 6;
// }
// retornaMedia();
// console.log(retornaMedia)

class Alunos {
    #nt = 0;

    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
    notaMedia(notaAcimaDaMedia){
        console.log(`${this.nome} esta com nota ${this.nota}`)
    }
    recebeuMedia(){
        this.#nt >= 6;
    }
}

const aluno1 = new Alunos ('carlos', '9')
const aluno2 = new Alunos ('jose', '4')
const aluno3 = new Alunos ('maria', '10')

aluno1.recebeuMedia()
if(aluno1.nota >= 6){
    console.log(`Acima da média`)
}else{
    console.log(`Abaixo da media`)
}
console.log(aluno1)