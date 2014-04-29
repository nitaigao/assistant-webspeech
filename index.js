var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('key-cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  if (req.url == '/') {
    res.end(fs.readFileSync('index.html'));
  }
  else {
    var filepath = '.' + req.url
    if (fs.existsSync(filepath)) {
      res.end(fs.readFileSync(filepath));
    }
    else {
      res.end('');
    }
  }

}).listen(3000);
