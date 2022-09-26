let movie = fetch("http://www.omdbapi.com/?i=tt3896198&apikey=74c231c4")

console.log(movie);

movie.
then(function(data)
{
    console.log(data)
    return data.json()
}).
then(function(gituser)
{
    console.log(gituser)
})