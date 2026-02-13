
    //  -------------filter----------------
const nums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = nums.filter((num)=> num>5)
// const newNums = nums.filter(function (num) {
//     return num>5
// })
const newNums = nums.filter((nums)=> {
     return nums>5
})
// console.log(`filter Nums: ${newNums}`);


// ------filter vs forEach----------
const forEachNums = []
   nums.forEach((num)=> {
       if (num>5) {
         forEachNums.push(num)
       }
   })
// console.log(`forEach Nums: ${forEachNums}`);


// another filter example - movies
const movies = [
  { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3, director: "Frank Darabont" },
  { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2, director: "Francis Ford Coppola" },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, director: "Christopher Nolan" },
  { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9, director: "Quentin Tarantino" },
  { title: "Forrest Gump", year: 1994, genre: "Drama", rating: 8.8, director: "Robert Zemeckis" },
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, director: "Christopher Nolan" },
  { title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8, director: "David Fincher" },
  { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7, director: "The Wachowskis" },
  { title: "Goodfellas", year: 1990, genre: "Crime", rating: 8.7, director: "Martin Scorsese" },
  { title: "Se7en", year: 1995, genre: "Thriller", rating: 8.6, director: "David Fincher" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, director: "Christopher Nolan" },
  { title: "The Silence of the Lambs", year: 1991, genre: "Thriller", rating: 8.6, director: "Jonathan Demme" },
  { title: "The Green Mile", year: 1999, genre: "Drama", rating: 8.6, director: "Frank Darabont" },
  { title: "Gladiator", year: 2000, genre: "Action", rating: 8.5, director: "Ridley Scott" },
  { title: "Saving Private Ryan", year: 1998, genre: "War", rating: 8.6, director: "Steven Spielberg" },
  { title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6, director: "Bong Joon Ho" },
  { title: "Avengers: Endgame", year: 2019, genre: "Action", rating: 8.4, director: "Anthony & Joe Russo" },
  { title: "The Prestige", year: 2006, genre: "Mystery", rating: 8.5, director: "Christopher Nolan" },
  { title: "Titanic", year: 1997, genre: "Romance", rating: 7.9, director: "James Cameron" },
  { title: "Joker", year: 2019, genre: "Drama", rating: 8.4, director: "Todd Phillips" },
  { title: "Avatar", year: 2009, genre: "Sci-Fi", rating: 7.8, director: "James Cameron" },
  { title: "The Lion King", year: 1994, genre: "Animation", rating: 8.5, director: "Roger Allers, Rob Minkoff" },
  { title: "The Departed", year: 2006, genre: "Crime", rating: 8.5, director: "Martin Scorsese" },
  { title: "Whiplash", year: 2014, genre: "Drama", rating: 8.5, director: "Damien Chazelle" },
  { title: "Django Unchained", year: 2012, genre: "Western", rating: 8.4, director: "Quentin Tarantino" },
  { title: "The Social Network", year: 2010, genre: "Biography", rating: 7.8, director: "David Fincher" },
  { title: "La La Land", year: 2016, genre: "Musical", rating: 8.0, director: "Damien Chazelle" },
  { title: "Spider-Man: No Way Home", year: 2021, genre: "Action", rating: 8.3, director: "Jon Watts" },
]

const DramaMovies = movies.filter((movie)=>movie.genre==="Drama")
// console.log(DramaMovies)

const ActionMovies = movies.filter((movie)=>movie.genre==="Action" && movie.rating>8)
console.log(ActionMovies)

const SciFiMovies = movies.filter((movie)=>movie.genre==="Sci-Fi")
// console.log(SciFiMovies)

const ThrillerMovies = movies.filter((movie)=>movie.genre==="Thriller")
// console.log(ThrillerMovies)

const WarMovies = movies.filter((movie)=>movie.genre==="War")
// console.log(WarMovies)