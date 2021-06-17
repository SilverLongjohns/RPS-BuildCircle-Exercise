const express = require('express');
const { gameInstance } = require('./game');
const game = require("./game");
const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.post('/start', (req, res) => {
    res.send(game.startGame());
});

app.get('/score', (req, res) => {

});

app.get('/game', (req, res) => {
    res.send(id);
    res.send(score);
});

app.post(`/game?${id}&move=ROCK`, (req, res) => {
    res.send(game.sendMove('ROCK'));
});

app.post(`/game?${game.gameInstance}&move=PAPER`, (req, res) => {
    res.send(game.sendMove());
});

app.post(`/game?${game.gameInstance}&move=SCISSORS`, (req, res) => {
    res.send(game.sendMove());
});


app.listen(port);

module.exports = app
