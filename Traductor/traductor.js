var traduccion = {
    general_error: 'soy un error',
    todo_piola: 'todo good',
    hola: 'chau',
}

function traducir() {
    var texto = $('.palabra').val()
    if (traduccion[texto]) {
        $('.resultado').html(traduccion[texto])
    } else {
        $('.resultado').html('esa palabra no existe')
    }
}










