
let arr = [];


$('.producto').on('click', function () {

	let hijos = $(this).children();
	let imgs = hijos.eq(0).attr('src');
	let nombreP = hijos.eq(1).html();
	let descrip = hijos.eq(2).html();
	let price = hijos.eq(3).html();

	let objeto = {
		foto: '',
		name: '',
		description: '',
		precio: ''

	}

	objeto.foto = imgs;
	objeto.name = nombreP;
	objeto.description = descrip;
	objeto.precio = price;

	arr.push(objeto);

	console.log(arr);


	localStorage.setItem('productos', JSON.stringify(arr));
});
