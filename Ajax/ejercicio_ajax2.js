
$.ajax({
	url: "https://jsonplaceholder.typicode.com/posts",
}).done(function (data) {

	for (var i = 0; i < data.length; i++) {
		const container = $('.main-container')
		const titulo = data[i].title;
		const body = data[i].body;
		var posts = '<div class="post-nuevo">' + titulo + body + '</div>';

		container.append(posts)

	}


});






