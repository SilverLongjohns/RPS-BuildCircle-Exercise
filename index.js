const express = require('express');
const game = require("./game");
const gameCache = require("./gameCache")
const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/start/:difficulty', (req, res) => {
    let params = req.params
    let difficulty = params.difficulty
    res.send(game.startGame(difficulty));
})

app.get('/start', (req, res) => {
    res.redirect(302, "/game")
});

app.get('/score/:id', (req, res) => {
    let params = req.params
    let id = params.id
    res.send(gameCache.getScore(id));
    console.log(gameCache.getScore(id))
});

app.post('/game/:id/:move', (req, res) => {
    console.log('hello', req.body)
    let params = req.params
    let move = params.move;
    let id = params.id
    const result = game.moveGame(move, id)

    if(result.error) {
        res.status(400)
    }

    res.send(result);
});


app.listen(port);

module.exports = app
