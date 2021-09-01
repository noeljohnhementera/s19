let movies = [
		{
			title: 'Aqua Man',
			genre: 'action',
			releaseDate: 2015,
			rating: 4,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			},
			displayTitleAndRating: function(){
				console.log(`${this.title} has ${this.rating} stars`)
			}
	},
		{
			title: 'Superman',
			genre: 'action',
			releaseDate: 2016,
			rating: 4.5,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			},
			displayTitleAndRating: function(){
				console.log(`${this.title} has ${this.rating} stars`)
			}
	},
		{
			title: 'The Joker',
			genre: 'action',
			releaseDate: 2014,
			rating: 4,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			},
			displayTitleAndRating: function(){
				console.log(`${this.title} has ${this.rating} stars`)
			}
	},
		{
			title: 'Mr.Bean',
			genre: 'comedy',
			releaseDate: 2010,
			rating: 4.5,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre + ' movie.')
			},
			displayTitleAndRating: function(){
				console.log(`${this.title} has ${this.rating} stars`)
			}
	},
		{
			title: 'Transformers',
			genre: 'action',
			releaseDate: 2009,
			rating: 4,
			displayRating: function(){
				console.log('The movie ' + this.title + ' has ' + this.rating + ' stars.')
			},
			displayGenre: function(){
				console.log(this.title + ' is an ' + this.genre  + ' movie.')
			},
			displayTitleAndRating: function(){
				console.log(`${this.title} has ${this.rating} stars`)
			}
	}
]

let n = 0
for(n = 0; n < movies.length; n++){
	movies[n].displayRating()
}

// Activity 1

let showAllMovies = () => {
	let i = 0
	for(i = 0; i < movies.length; i++){
	movies[i].displayGenre()
	}
}

// Activity 2

let showTitles = (num) => {
for(z = 0; z < movies.length; z++){
	movies[z].displayTitleAndRating()
	if(num >= 4){
		console.log('4 and above star ratings movie')
	}else{
		console.log('No movies with that rating')
		}
	
	}

}

