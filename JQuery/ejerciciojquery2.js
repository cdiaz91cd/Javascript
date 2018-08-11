
var lista = $('#lista');

function agregar() {
  const inputValue = $('#input-tareas').val()
  const listItem = '<li class="lista-tareas">' + inputValue + '</li class="boton-lista">'

  lista.append(listItem)
  $('#input-tareas').val('')
}

