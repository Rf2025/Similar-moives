// // fetch json data and create template to dispay movies to html

// const movieSection = document.getElementById('movie-section');


// const form = document.querySelector('form')
// const input = document.getElementById('search-box')
// form.addEventListener('submit',(e)=>{
//   e.preventDefault
//    let inputValue = input.value
//    console.log(inputValue)
// })






// fetch('/Movie/movies.json')
// .then(res =>{
//    if(!res.ok) console.log('Erorr getting data, status code:',res.status)
//    return res.json()
// })
// .then(data=>{
//    const movies = data.results;
 
  
//    movies.forEach((movie)=>{
//       const movieHtml = `
//       <div class="movie">
//       <h5>${movie.title}</h5>
//       <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" class="movie-img">
//       <p>${movie.overview}</p>
//       </div>   
//       `
//       movieSection.insertAdjacentHTML('beforeend', movieHtml);
//    })
// })


// create function to get user input value
// we will export the function to use in node 



