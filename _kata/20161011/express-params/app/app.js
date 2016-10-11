var express = require('express');

var app = express();

app.set('port', 3000);

app.param('id', (req, res, next, id) => {
  req.userId = id;
  next();
});

app.get('/:id', (req, res) => {
  
  let logs = '';
  logs += 'Main Route, for ID: ' + req.userId + '\n';
  logs += '\nAccepts: ' + req.accepts();
  logs += '\nip: ' + req.ip;
  logs += '\npath: ' + req.path;
  logs += '\nfresh: ' + req.fresh;
  logs += '\nxhr: ' + req.xhr;
  logs += '\nprotocol: ' + req.protocol;
  logs += '\nsecure: ' + req.secure;
  
  res.send(logs);
});

exports = module.exports = app;