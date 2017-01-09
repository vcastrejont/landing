var express = require('express');
var path      = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
  	res.render('index');
});

app.use(express.static('public'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  res.status(404).send('Not Found')
});


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Ladning page running at: '+ app.get('port'));
});
