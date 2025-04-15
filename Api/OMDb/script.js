const apikey = "30ec0119";

const search = document.getElementById("search").val;
const searcbutton = document.getElementById("searchButton");
const poster = document.getElementById("poster");
const movieTitle = document.getElementById("movieTitle");
const writer = document.getElementById("writer");
const director = document.getElementById("director");


function callApi(searchMovies) {
    const apilink = "https://www.omdbapi.com/?t="+ searchMovies+"&apikey=30ec0119";

    fetch(apilink).then(response => response.json()).then(
        (data => {
           movieTitle.innerHTML=data.Title
            writer.innerHTML = data.Writer;
            director.innerHTML = data.Director
            poster.src=data.Poster  
        }
        )
    )
}

searcbutton.addEventListener('click',  function(){
   const  searchMovies=search;
    callApi(searchMovies);

})