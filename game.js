const uuid = require('uuid')
let gameCache = []



const startGame = () => {
    const gameInstance = {
        id: uuid.v4(),
        score: 0,
    }
    gameCache.push(gameInstance)
    return gameInstance
}

const moveGame = (move, id) => {
    let result
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let currentGame = gameCache.find(x => x.id === id)

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

        incrementScore(id)

    } else {
        console.log('YOU LOSE', move, choices[random]);
        result = 'LOSE'
    }

    return {
        ...currentGame,
        lastGame: {
            result,
            yourMove: move,
            computerMove: choices[random]
        }
    }
}

const incrementScore = (id) => {
    let currentGameIndex = gameCache.findIndex(x => x.id === id)
    gameCache[currentGameIndex].score++
}

const getScore = (id) => {
    let score
    gameCache.forEach(x => {
        if(x.id === id){
            score = x
        }
    })
    return score
}


module.exports = {
    getScore,
    startGame,
    moveGame,
}
