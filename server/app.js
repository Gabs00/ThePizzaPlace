var app = require('express')();

app.use('/', function(req, res){
  console.log(req.url);
  res.sendFile(req.url, { root: __dirname + '/../client'});
});

module.exports = app;