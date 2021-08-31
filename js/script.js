let movies = [
		{
			title: 'Aqua Man',
			genre: 'action',
			releaseDate: 2015,
			rating: 9,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			}
	},
		{
			title: 'Superman',
			genre: 'action',
			releaseDate: 2016,
			rating: 8.5,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			}
	},
		{
			title: 'The Joker',
			genre: 'action',
			releaseDate: 2014,
			rating: 8,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			}
	},
		{
			title: 'Mr.Bean',
			genre: 'comedy',
			releaseDate: 2010,
			rating: 10,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			}
	},
		{
			title: 'Transformers',
			genre: 'action',
			releaseDate: 2009,
			rating: 9.5,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre  + ' movie.')
			}
	}
]

let n = 0
for(n = 0; n < movies.length; n++){
	movies[n].displayRating()
}

let showAllMovies = () => {
	let i = 0
	for(i = 0; i < movies.length; i++){
	movies[i].displayGenre()
	}
}