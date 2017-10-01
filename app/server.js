var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('client/build'));

app.use("/db/wiki", require("./controllers/WikiController"));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
