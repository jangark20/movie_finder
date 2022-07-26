const API_URL="http://www.omdbapi.com/?i=tt3896198&apikey=388a58b9&s=?";
const API_URL_SEARCH=" http://www.omdbapi.com/?i=tt3896198&apikey=388a58b9&i=";

var search_input=document.getElementById("search_input");
var card=document.getElementsByClassName("movie-cards")[0];	
document.getElementByClassName("search")[0];
addEventListener("click",function(){
console.log(search_input.value);
const query=search_input.value;
if(query){
getMovies(API_URL+query);
}
});

async function getMovies(url){
const resp=await fetch(url);
const respData=await resp.json();
console.log(respData);
showMovies(respData.search);
}

function showMovies(movies){
card.innnerHTML="";
movies.forEach(async function(movie){
const movieData=await fetch(API_URL_SEARCH+movie.imdbID);
const movieDataobj=await movieData.json();
movie_display(movieDataobj);
});
}

function movie_display(imovie){
const movieElm=document.createElement("div");
movieElm.classList.add("movie-card");
movieElm.innerHTML='
<div class="cards">
<img src="${imovie.poster}" att="poster" width="300px" height="300px" />
<br>
<div class="movie-description">
<span class="movie-title"><b>Title</b><span class="value">${imovie.Title}</span></span>
<span class="movie-title"><b>Title</b><span class="value">${imovie.imdbRating}</span></span>
<span class="movie-title"><b>Title</b><span class="value">${imovie.Director}</span></span>
<span class="movie-title"><b>Title</b><span class="value">${imovie.Released}</span></span>
<span class="movie-title"><b>Title</b><span class="value">${imovie.Genre}</span></span>
</div>
</div>
';


card.append_Child(movieElm);

}