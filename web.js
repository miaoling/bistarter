fs = require("fs")
var express = require('express');
html_file = "index.html"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(html_file).toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});