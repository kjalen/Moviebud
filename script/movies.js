let movie_json;
let cinema_id = '48123';
let showtime_json;


// fetch_movie_json(movie_id, (result)=>{
//   movie_json = result;
//   movie_id = movie_json.movie.id;
//
//   fetch_movie_showtimes(movie_id, cinema_id, (result)=>{
//     showtime_json = result;
//   })
// });


let movie_img_url;
$(document).ready(function() {
  // construct the background images
  // movie_img_url = movie_json.movie.poster_image.image_files[3].url;
  // $("#poster").append('<img src = ' + movie_img_url + '></img>');
  // $("#overview").append('<p>' + movie_json.movie.synopsis + '</p>');
  // $("#movie-title").html(movie_json.movie.title);
  // populate_showtimes(showtime_json);
  // populate_cast(movie_json);
});

// function populate_cast(movie_json){
//   $.each(movie_json.movie.cast, (i,v)=>{
//     $('#cast').append('<li>' + v.name + ' as ' + v.character + '</li>');
//     return
//   })
// }
