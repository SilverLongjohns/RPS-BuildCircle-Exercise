const express = require('express');
const game = require("./game");
const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.send("Hello world");
});

// app.post('/start', (req, res) => {
//     res.send(game);
// });

app.listen(port);
