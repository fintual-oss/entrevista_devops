var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  const count = process.env.APP_COUNT || 0;

  res.send(`Current count is ${count}.`)
})

app.get('/increment/:count', function (req, res) {
  const increment = parseInt(req.params.count, 10);
  const previousCount = parseInt(process.env.APP_COUNT, 10) || 0;
  const count = previousCount + increment;

  process.env.APP_COUNT = count;

  res.send(`Count incremeted by ${increment} and now is ${count}`)
})

app.get('/ping', function (req, res) {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`)
})
