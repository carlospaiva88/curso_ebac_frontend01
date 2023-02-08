$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true
            },
            cpf: {
                required : true,
            },
            cep:{
                required : false
            },
            
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email:'Por favor, insira o seu e-mail',
            telefone:'Por favor, insira um telefone de contato válido',
            cpf: 'Por favor, insira um número de CPF valido'
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }else{
                $('form').submit('');
            }
        }
    
    })

   
})