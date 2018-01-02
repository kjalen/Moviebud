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

  let movie_url = `${base_url}/movies/${req.params.id}?apikey=${apikey}`;
  fetch(movie_url)
    .then(response => {
      // response is the movie json, send it to the client
        response.json().then(json =>{
          res.render('movies', {
            title: json.movie.title,
            movie_json: json.movie
          });
      });

    }).catch(error =>{
      console.log(error);
    })

});
