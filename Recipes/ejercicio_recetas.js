

$('#botonMas').on('click', function () {
	$('#input-nuevo').append('<input class="text-input-nuevo" type="text" name="" value="">')
})


let recetas = [];


function guardarReceta() {
	var newIngredientsReceta = [];
	$('.text-input-nuevo').each(function () {
		var nuevosIngredientes = $(this).val()
		newIngredientsReceta.push(nuevosIngredientes);

	})


	recetas.push({
		titulo: $('.textinput').val(),
		precio: $('.precioinput').val(),
		ingredientes: newIngredientsReceta
	})
	console.log(recetas)

	console.log(newIngredientsReceta);
}

console.log(recetas)


function search() {
	console.log(recetas);
	for (var i = 0; i < recetas.lenght; i++) {
		if ($('.input-buscador').val() == $('.textinput').val()) {
			$('.contenido').hide()

			let titulo = recetas[i].titulo;
			let precio = recetas[i].precio
			let ingre = recetas[i].ingredientes;

			let ponerIngre = '<p>' + ingre + '</p>'

			$('contenido-recetas').append(titulo)
			$('contenido-recetas').append(precio)
			$('contenido-recetas').append(ingre)



		} else {
			$('.contenido').hide()
			let noExiste = 'No existe la receta';
			$('.contenido-recetas').append(noExiste)
			
		}
	}

}


console.log($('.input-buscador'));

function limpiar() {
	$('.textinput').val('')
	$('.precioinput').val('')
	$('.text-input-nuevo').val('')
}


//volver esto un objeto y pushear a new receta

/*

$('.botonGuardar').on('click', function(e) {
	const titulo = $('.textinput').val()
	const precio = $('.precioinput').val()
	const ingredientesInput =$('textingredientes').val()
	$('.text-input-nuevo').each(function(){//por cada elemento text-input-nuevo hacele la funcion, funciona como un for.
			newReceta.push(receta);
			console.log(newReceta);

	})

})

var a=[8,8,8];
var b= a;
b.push(3;)

Para que no lo agregue a los dos, como por ejemplo con las recertas:

adentro de la funcion guardar hacer una variable copiareceta= object.assign({} , receta)
cada vez que hagamos click en el boton guardar va a venir aca y va a guardar un nuevo espacio en memoria


function guardarReceta(){
	var todosLosIngredientes=[];
	for(var i=0; i < $('text-input-nuevo').length; i++){
		var ing= $('text-input-nuevo').eq(i).val()
		todosLosIngredientes.push(ing)
	}

	receta.push({
	titulo:$('textinput').val(),
	precio:$('precioinput').val(),
	ingredientes:[guardarReceta()],



	})


}


*/
