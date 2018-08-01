//filtrar por marca y categoria
//cada vez que aprestas comprar se va al otro html
//y en el boton comprar va al otro html

let arr=[];


$('.producto').on('click', function(){

	let hijos = $(this).children();
	let imgs= hijos.eq(0).attr('src');
	let nombreP=hijos.eq(1).html();
	let descrip = hijos.eq(2).html();
	let price=hijos.eq(3).html();	

	let objeto={
		foto:'',
		name:'',
		description:'',
		precio:''

	}

	objeto.foto=imgs;
	objeto.name=nombreP;
	objeto.description=descrip;
	objeto.precio=price;

	arr.push(objeto);

	console.log(arr);
	//console.log(imgs);

	localStorage.setItem('productos', JSON.stringify(arr));//los objetos que ponga en localstorage no pueden ser objetos, tienen que ser como string.
});

console.log(arr);



//filtro.



const long= $('.producto').length;

$('.check').click(function() {
    let checkbox = $('input[type=checkbox]:checked');
    //console.log(checkbox);

    for(var i=0; i < long;i++){
//si este click es de gatos que show() gatos y los demas hide()
	if ($('.producto').eq(i).data('marca')==$().val())

});


//me falta el filtro









 







//yo el objeto que cree lo quiero poner en un array en el local storage y uso stringify


