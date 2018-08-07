

var lista = $('lista');



function agregar() {
  const inputValue = $('#input-tareas').val()
  const listItem = "<li>" + inputValue + '</li><button>x</button>'

  lista.append(listItem)
  $('#input-tareas').val('')
}

console.log(agregar());
