

var body = document.querySelector('body');
var ul = document.querySelector('ul');


function boton() {
	var input = document.getElementById('inp');
	var li = document.createElement('li');
	li.textContent = inp.value;
	ul.appendChild(li);
	inp.value = "";


}