var express = require('express');
var app = express();
const port = 3000;

app.get('/ping', function (req, res) {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Server listening at PORT ${port}`)
})
