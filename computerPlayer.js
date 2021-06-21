
const move = (difficulty, move) => {
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * choices.length);
    console.log(move)

    switch (difficulty) {
        case 'HARD':
            choices.forEach(x => {
                if (x !== move ) {
                    choices.push(x)
        }
            })
            console.log(choices, "difficulty")
            return choices[random]
            break

        case 'EASY':
            return choices[random]
        break

       default:
            throw Error('Incorrect difficulty')
    }
}


module.exports = {
    move,
}
