const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require("node-fetch");
const envVars = require('./config.json');


// api vars
const apikey = envVars['apikey'] || 'no api key provided in config.json';
const base_url = 'https://api.internationalshowtimes.com/v4';
let params = {
  apikey: apikey
}
const port = envVars['port'] || 3000;

var db;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.locals.basedir = __dirname;

app.listen(port, () => {
  console.log('listening on ' + port);
});


app.get('/', (req, res) => {
  let url = `${base_url}/movies?apikey=${apikey}&limit=10&fields=id,slug,title,poster_image_thumbnail,original_title,synopsis,genres,poster_image`;
  fetch(url).then(response=>{
    response.json().then(json =>{
      res.render('index', {
        title: 'Moviez!',
        message: 'Heres dem moviez',
        json: json.movies
      })
    })
  }).catch(error =>{
    console.log(error);
  })
});

app.get('/movies/:id', (req, res) => {
  let movie_json;
  let showtimes_json;
  get_movie_json(req.params.id).then(result=>{
    res.render('movies', {
      title: result.title,
      movie_json: result.movie
    });
  })
});

function get_movie_json(movie_id){
  let movie_url = `${base_url}/movies/${movie_id}?apikey=${apikey}`;
  return new Promise((resolve, reject) => {
    fetch(movie_url)
      .then(response => {
        // response is the movie json, send it to the client
          response.json().then(json =>{
            return resolve(json)
        });
      }).catch(error =>{
        return reject(error);
      })
  })

}

 // https://api.internationalshowtimes.com/v4/showtimes/?apikey=iCgCjwBWEmcyGmdZfcRiPfJE855MHvpc&city_ids=4978&movie_id=16216&cinema_id=48123
function get_movie_showtimes(movie_id){
  let city_id = 4978; // Victoria
  let cinema_id = 48123;
  let showtime_url = `${base_url}/showtimes/?apikey=${apikey}&movie_id=${movie_id}&city_id=${city_id}&cinema_id=${cinema_id}`;
  return new Promise((resolve, reject) => {
    fetch(showtime_url)
      .then(response => {
        // response is the movie json, send it to the client
          response.json().then(json =>{
            return resolve(json)
        });

      }).catch(error =>{
        return reject(error);
      })
  })

}
