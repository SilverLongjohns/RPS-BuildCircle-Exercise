let gameCache = []

const saveScore = (id, score) => {
    console.log("FIRST", id)
    console.log("FIRST", score)
    if(gameCache.length === 0){
        gameCache.push({id: id, score: score})
    } else {
        gameCache.forEach(x => {
            if (x.id === id) {
                gameCache.splice(gameCache.indexOf(x), 1, {id: id, score: score})
            } else {
                gameCache.push({id: id, score: score})
            }
        })
    }
    console.log(gameCache)
}

const getScore = (id) => {
    gameCache.forEach(x => {
        if(x.id === id){
            return [...gameCache, {id: id, score: x.score}]
        }
    })
}

module.exports = {
    saveScore,
    getScore
}
