var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var outFile = 'index.html';
var outStringBuff = fs.readFileSync(outFile);
var outTextStr = outStringBuff.toString();

app.get('/', function(request, response) {
  response.send(outTextStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
