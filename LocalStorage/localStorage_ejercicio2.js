

let localS = localStorage.getItem('productos');
console.log(localS);

localS = JSON.parse(localS);
console.log(localS);


for (var i = 0; i < localS.length; i++) {
	let fotoP = '<div>' + '<img class="fotoP" src="' + localS[i].foto + '">' + '</div>';
	console.log(fotoP);
	let nombreP = '<div class="nombreP">' + localS[i].name + '</div>';
	let descriptionP = '<div class="descriptionP">' + localS[i].description + '</div>';
	let precioP = '<div class="precioP">' + localS[i].precio + '</div>';
	$('.lista-producto').append(fotoP);
	$('.lista-producto').append(nombreP);
	$('.lista-producto').append(descriptionP);
	$('.lista-producto').append(precioP);
}

