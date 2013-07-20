var express = require('express');
var app = express();
app.use(express.logger());

//var fs = require('fs');
//var outFile = 'index.html';
//var buffer = new Buffer(fs.readFileSync(outfile);
//var outTextStr = buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send('restesting');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
