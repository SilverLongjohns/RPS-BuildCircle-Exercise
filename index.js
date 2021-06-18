const express = require('express');
const game = require("./game");
const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/start', (req, res) => {
    res.send(game.startGame());
})

app.get('/start', (req, res) => {
    res.redirect(302, "/game")
});

app.post('/game/:id/:move', (req, res) => {
    console.log('hello', req.body)
    let params = req.params
    let move = params.move;
    let id = params.id
    res.send(game.moveGame(move, id));
});


app.listen(port);

module.exports = app
