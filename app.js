const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('jebiga');
});

app.listen(3000, () => {
  console.log('test');
});
