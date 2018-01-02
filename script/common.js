// 
//
// function fetch_movie_json(movie_id_url, callback){
//
//   movie_url = base_url + movie_id_url + '?' + $.param(params);
//   $.ajax({
//     cache: true,
//     async: false,
//     url: movie_url,
//     error: (err) =>{
//       console.log('error: ' + err);
//       return;
//     }
//   }).done((result) => {
//     callback(result);
//   });
// }



// function fetch_movie_showtimes(movie_id, cinema_id, callback){
//
//   params.movie_id = movie_id;
//   params.city_id = city_id;
//   params.cinema_id = cinema_id;
//   // get 1 week from now to filter results
//   let date = new Date();
//   date.setTime(date.getTime() + 7);
//   console.log('date is ' + date);
//   params.to_date = date;
//   movie_url = base_url + '/showtimes/' + '?' + $.param(params);
//   console.log('movie url issss ' + movie_url);
//
//   $.ajax({
//     async: false,
//     url: movie_url
//   }).done((result) =>{
//     callback(result);
//   })
// }
