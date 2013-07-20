var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var outFile = 'index.html';
var outTextBuffer = fs.readFileSync(outfile);
var outTextStr = buf.toString(outTextBuffer);

app.get('/', function(request, response) {
  response.send(outTextstr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
