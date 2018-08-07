

const list = $('#list')
function add() {
  const inputValue = $('#action').val()
  const listItem = "<li>" + inputValue + '</li><button>Borrar</button'

  list.append(listItem)
  $('#action').val('')
}


$(document).on('click', 'ul button', function () {
  console.log(123)
  const index = $('ul button').index(this)

  console.log(index)
  $('ul li')[index].remove()
  $('ul button')[index].remove()

});


$('#action').on('keypress', function (e) {
  console.log(e.keyCode)
  if (e.keyCode == 13) {
    add()
  }
})