const express = require('express');
const { gameInstance } = require('./game');
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

app.get('/score', (req, res) => {

});

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/game.html');
    const gameId = res.send(gameInstance.id)
    res.send(id);
    res.send(score);
});

app.post('/game', (req, res) => {
    console.log('hello', req.body)
    res.send(game.moveGame('ROCK'));
});


app.listen(port);

module.exports = app
