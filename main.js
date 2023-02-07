$(document).ready(function(){

    $('form').on('submit', function(e){

        e.preventDefault();        
      

        const listaTarefa = $('#lista-tarefa').val();
        const pegaLi = $ ('<li></li>')

        $(pegaLi).html(listaTarefa);
        $(pegaLi).appendTo('ul');

        $('#lista-tarefa').val('')
        
    })
        
    

    })