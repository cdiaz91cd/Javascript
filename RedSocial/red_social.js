
const list= $('.list')




function agregar(){
	
	const carita= $('.caritas').val()
  	const inputValue = $('.input').val()
  	const lista = '<div class="publication-container">'+ inputValue + ' ' + carita +'</div>'

 	list.append(lista)
	$('.input').val('')
 
	}


$('.input').on('keypress', function(e) {
  if (e.keyCode == 13) {
   agregar();
	}
})

//falta hacerle borde al div nuevo y el css

