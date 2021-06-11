const uuid = require('uuid')

const startGame = () => {
    return {
        id: uuid.v4(),
        score: 0,
    }
}

module.exports = {
    startGame,
    id: uuid.v4(),
}
