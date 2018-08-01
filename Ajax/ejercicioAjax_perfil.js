

$.ajax({
	method:'GET',
	url:'https://api.github.com/users/cdiaz91cd'

}).done(function(a){
	console.log(a);
	$('img').attr('src', a.avatar_url);
	$('.nombre').html('<a href=' + a.html_url + '>' + a.name + '</a>');
	$('.trabajo').html(a.company);
	$('.biografia').html(a.bio);
	$('.following').html(a.following);
	$('.followers').html(a.followers);
	$('.respos').html('<a href=' + a.html_url + '?tab=repositories' + '>' + a.public_repos + '</a>');
}) 
	

	$('.botonRepos').on('click', function() {
		$.ajax({
			url: 'https://api.github.com/users/cdiaz91cd/repos'
		}).done(function(repos){//aca pongo cualquier palabra como "parametro" y me va a traer todo lo que puse ne la url de la api.
		

		for(var i=0; i < repos.length; i++){
			var nombreRepo = repos[i].name;//[i] refiere al indice de cada vuelta
			var nombreAutor= repos[i].owner.login;
			var descrip= repos[i].description;
			$('.textoRepos').append('<div class="namerepo">' 
				+ nombreRepo + nombreAutor + descrip + '</div>');
			
			}
			var urlRepo= 'https://github.com/cdiaz91cd/adatest'
	}) $('namerepo').html('<a href=' + urlRepo + '>' + '</a>')

})

