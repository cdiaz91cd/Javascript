

//1

var body = document.querySelector('body');
var ul = document.querySelector('ul');


function boton(){
	var input = document.getElementById('inp');
	var li= document.createElement('li');
		li.textContent = inp.value;
		ul.appendChild(li);
		inp.value="";
		

}


	

//2 crear elemento li
/*
function new(){
	var create = document.createElement('li');
	var newContent = document.createTextNode(inp.value);

	 create.appendChild(newContent); 
}

*/


//recuperar el valor del input que escribi
//crear un li
//poner ese elemento en el li




//document.createElement('h1')

//titulo.textContent = 'esto es dinamico';
//body.appendChild(titulo);

/*
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
*/