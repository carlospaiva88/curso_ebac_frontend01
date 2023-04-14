// const form = document.getElementById('form');
// form.reset();

$(document).ready(function(){
    $('#btn-buscar-git').click(function(){
        const git = $('#git').val();
        const endpoint = `https://github.com/${git}`;

        $.ajax(endpoint).done(function(resposta){

            const profileName = resposta.profileName;
            const endereco = `${profileName}`;
            $('#endereco').val(endereco);
        })                             
    })
})

