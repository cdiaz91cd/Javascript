/*
function guardarReceta(){
	var newIngredientsReceta=[];
	$('.text-input-nuevo').each(function(){//por cada elemento text-input-nuevo hacele la funcion, funciona como un for.
			var nuevosIngredientes = $(this).val()
			newIngredientsReceta.push(nuevosIngredientes);	
			
	})

	
	recetas.push({
		titulo: $('.textinput').val(),
		precio: $('.precioinput').val(),
		ingredientes: newIngredientsReceta

	})
	
	console.log(recetas);

}
*/




$.ajax({
	url:"https://jsonplaceholder.typicode.com/posts",
}).done(function( data ){

	for(var i=0; i<data.length;i++){
		//console.log(data[i]);
	const container = $('.main-container')
	const titulo= data[i].title;
	const body= data[i].body;
	var posts='<div class="post-nuevo">'+ titulo + body + '</div>';
	
	container.append(posts)

	}


});






