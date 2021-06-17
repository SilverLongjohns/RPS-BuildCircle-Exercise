const uuid = require('uuid')

let gameInstance = {

}

const startGame = () => {
    gameInstance = {
        id: uuid.v4(),
        score: 0,
    }
    return gameInstance
}

const moveGame = (move) => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    const random = Math.floor(Math.random() * choices.length);
    console.log(random)

    if(move === random) {
        console.log('DRAW', move, random);
    }

    if(
        (move === 'PAPER' && random === 'ROCK') || 
        (move === 'SCISSORS' && random === 'PAPER') || 
        (move === 'ROCK' && random === 'SCISSORS')
        ){
        console.log('YOU WIN', move, random);
    } else {
        console.log('YOU LOSE', move, random);
    }
}

module.exports = {
    startGame,
    gameInstance,
    moveGame,
}
