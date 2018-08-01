

var lista = $('lista');



function agregar() {
  const inputValue = $('#input-tareas').val()
  const listItem = "<li>" + inputValue + '</li><button>x</button>'

  lista.append(listItem)
  $('#input-tareas').val('')
}

console.log(agregar());

/*
$(document).on('click', 'ul button' , function() {
  console.log(123)
  const index = $('ul button').index(this)

  console.log(index)
  $('ul li')[index].remove()
  $('ul button')[index].remove()

});




const index= $('il input').index(this)// de il input traeme el indice de eso 




*/