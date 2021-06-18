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

    let currentGame = gameCache.find(x => x.id === id)

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
    console.log("BEFORE", gameCache)
    let currentGameIndex = gameCache.findIndex(x => x.id === id)
    console.log("1", gameCache[currentGameIndex])
    gameCache[currentGameIndex].score++
    console.log("2", gameCache[currentGameIndex])
    console.log("AFTER", gameCache)
}

const getScore = (id) => {
    gameCache.forEach(x => {
        if(x.id === id){
            return [...gameCache, {id: id, score: x.score}]
        }
    })
}


module.exports = {
    startGame,
    moveGame,
}
