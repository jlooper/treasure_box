var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var guestbook = require('./routes/guestbook');

var uriString = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/local';
    

mongoose.connect(uriString, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + uriString + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uriString);
  }
});

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('myvar', 'test');

app.use('/api',guestbook);

app.get('/', function(request, response) {
	response.render('pages/index')
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
