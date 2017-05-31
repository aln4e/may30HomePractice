var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Favorites = require('./models').Favorites

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.post('/add', function(request, response){
  let params = request.body.person
  Favorites.create(params).then(function(person){
    response.status(200)
    response.json({person:person})
  }).catch(function(err){
    response.status(400)
    response.json({error:err})
  })
})

app.listen(4000, function () {
 console.log('Todo Server listening on port 4000!');
});
