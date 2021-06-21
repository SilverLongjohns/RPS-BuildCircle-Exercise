const uuid = require('uuid');

const v4 = () => {
    return uuid.v4();
}

module.exports = {
    v4,
}
