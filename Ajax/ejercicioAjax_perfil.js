

$.ajax({
	method: 'GET',
	url: 'https://api.github.com/users/cdiaz91cd'

}).done(function (a) {
	console.log(a);
	$('img').attr('src', a.avatar_url);
	$('.nombre').html('<a href=' + a.html_url + '>' + a.name + '</a>');
	$('.trabajo').html(a.company);
	$('.biografia').html(a.bio);
	$('.following').html(a.following);
	$('.followers').html(a.followers);
	$('.repos').html('<a href=' + a.html_url + '?tab=repositories' + '>' + a.public_repos + '</a>');
})


$('.botonRepos').on('click', function () {
	$.ajax({
		url: 'https://api.github.com/users/cdiaz91cd/repos'
	}).done(function (repos) {


		for (var i = 0; i < repos.length; i++) {
			var nombreRepo = repos[i].name;
			var nombreAutor = repos[i].owner.login;
			var descrip = repos[i].description;
			$('.textoRepos').append('<div class="namerepo">'
				+ nombreRepo + nombreAutor + descrip + '</div>');

		}
	})
	var urlRepo = 'https://github.com/cdiaz91cd/adatest'
	$('.namerepo').html('<a href=' + urlRepo + '>' + '</a>')

})

