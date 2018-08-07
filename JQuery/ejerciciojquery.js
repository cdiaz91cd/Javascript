


let numero = 0;
var body = document.querySelector('body');

$(document).on('click', '.suma', function () {

	numero = numero + 1;
	$("p").html(numero) 
	if (numero > 10) {
		$(".caja").addClass("color-distinto");
		console.log('YAY');
	}

	if (numero > -10) {
		$('.pum').hide()
	}

})

$(document).on('click', '.resta', function () {

	numero = numero - 1;
	$("p").html(numero)
	if (numero < 0) {
		$(".caja").addClass("color-distinto2");
		console.log('EXPLOTÓ TODO');
	}

	if (numero <= -10) {
		$('.pum').show()

	}
})





/*

	var input = document.getElementById('inp');
	var li= document.createElement('li');
		li.textContent = inp.value;
		ul.appendChild(li);
		inp.value="";
		

}


	if(numero > 10){

var arr = ['nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre1', 'nombre10']
var body= document.querySelector('body');
var ul = document.createElement ('ul');

	for (var i =0; i < arr.length; i++){
		var li= document.createElement('li');
		li.textContent = arr[i];
		ul.appendChild(li);
	}

	body.appendChild(ul);
	console.log(ul);



		for (i=0; i< numero.length; i++)
		let resultado = numero[i];
	if (resultado < [i]){
		i++;
		console.log('resultado');

	}else{
		console.log('restale');
	}


	*/