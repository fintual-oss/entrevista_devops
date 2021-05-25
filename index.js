var express = require('express');
var app = express();
const port = 3000;

app.get('/', function (req, res) {
  const count = 0;

  res.send(`Current count is ${count}.`)
})

app.get('/increment/:count', function (req, res) {
  const count = req.params.count;

  res.send(`Count incremeted by ${count}`)
})

app.get('/ping', function (req, res) {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`)
})
