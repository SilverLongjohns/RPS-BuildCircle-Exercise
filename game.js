const uuidGen = require('./uuidGen')
const gameCache = require('./gameCache')
const computer = require('./computerPlayer')

const startGame = () => {
    return gameCache.createGame();
}

const moveGame = (move, id) => {
    let result
    let currentGame = gameCache.getGame(id)

    const computerMove = computer.move()

    if(move === computerMove) {
        console.log('DRAW', move, computerMove);
        result = 'DRAW'
    }

    if(move === "BOMB" && currentGame.move < 5) {
        const message = "Cannot use bomb this early in the game!"
        return {
            error: {
                message,
            }
        }
    } else if (move === "BOMB" && currentGame.move >= 5) {
        console.log('YOU WIN', move, computerMove);
        result = 'WIN'
        currentGame.move = 0;
        gameCache.incrementScore(id)
    } else if (
        (move === 'PAPER' && computerMove === 'ROCK') ||
        (move === 'SCISSORS' && computerMove === 'PAPER') ||
        (move === 'ROCK' && computerMove === 'SCISSORS')
        )
    {
        console.log('YOU WIN', move, computerMove);
        result = 'WIN'

        gameCache.incrementScore(id)
    } else {
        console.log('YOU LOSE', move, computerMove);
        result = 'LOSE'
    }

    gameCache.incrementMove(id)

    return {
        ...currentGame,
        lastGame: {
            result,
            yourMove: move,
            computerMove,
        },
    }
}

module.exports = {
    startGame,
    moveGame,
}
