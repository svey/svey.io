var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname));


app.get('/', function (req, res) {
  res.sendFile('/index.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});