const uuidGen = require('./uuidGen')

let gameCache = []

const createGame = () => {
    const gameInstance = {
        id: uuidGen.v4(),
        score: 0,
        move: 0,
    }
    gameCache.push(gameInstance)
    return gameInstance
}

const getGame = (id) => {
    return gameCache.find(x => x.id === id)
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

const incrementScore = (id) => {
    let currentGameIndex = gameCache.findIndex(x => x.id === id)
    gameCache[currentGameIndex].score++
}

const incrementMove = (id) => {
    let currentGameIndex = gameCache.findIndex(x => x.id === id)
    gameCache[currentGameIndex].move++
}

module.exports = {
    createGame,
    getGame,
    incrementScore,
    incrementMove,
    getScore,
}
