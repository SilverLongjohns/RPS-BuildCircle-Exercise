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
    let result
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];

    const random = Math.floor(Math.random() * choices.length);
    console.log(random)

    if(move === choices[random]) {
        console.log('DRAW', move, choices[random]);
        result = 'DRAW'
    }

    else if(
        (move === 'PAPER' && choices[random] === 'ROCK') || 
        (move === 'SCISSORS' && choices[random] === 'PAPER') || 
        (move === 'ROCK' && choices[random] === 'SCISSORS')
        ){
        console.log('YOU WIN', move, choices[random]);
        result = 'WIN'
        gameInstance.score++

    } else {
        console.log('YOU LOSE', move, choices[random]);
        result = 'LOSE'
    }
    return {
        ...gameInstance,
        lastGame: {
            result,
            yourMove: move,
            computerMove: choices[random]
        }
    }
}

module.exports = {
    startGame,
    gameInstance,
    moveGame,
}
