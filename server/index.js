const express = require("express");
const fs = require('fs');
const T9 = require('./T9');

const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((req, res, next) => {
  fs.readFile('./dict.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else if (data) {
      return T9.init(data);
    }
  });
  next();
});

app.get("/words/:number", (req, res) => {
  const number = req.params.number;
  const predictions = T9.predict(number);
  const firstLetter = T9.keyMap[number[number.length - 1]][0];

  res.send({ data: predictions, firstLetter });
});

app.listen(process.env.PORT || PORT);
