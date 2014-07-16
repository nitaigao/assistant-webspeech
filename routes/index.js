var express  = require('express'),
    faye     = require('faye'),
    settings = require('env-settings')
;

var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/command', function(req, res) {
  var client = new faye.Client(settings.detection + '/');
  client.publish('/messages', req.body.text);
  res.end("OK!")
});

module.exports = router;
