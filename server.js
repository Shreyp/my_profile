var express = require('express');

var app = express();
var PORT = process.env.PORT || 7080;

app.use('/js', express.static('assets/js'));
app.use('/css', express.static('assets/css'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/clickgame', function(req, res){
  res.sendFile(process.cwd() + '/views/clickgame.html')
});

app.get('/rpsls', function(req, res){
  res.sendFile(process.cwd() + '/views/rpsls.html');
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});