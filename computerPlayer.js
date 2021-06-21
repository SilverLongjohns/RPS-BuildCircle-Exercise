
const move = () => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const random = Math.floor(Math.random() * choices.length);

    return choices[random]
}

module.exports = {
    move,
}
