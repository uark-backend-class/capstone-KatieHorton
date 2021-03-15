const users = require('../db');

function isAuthenticated(req, res, next) {

    let foundUser = users.find(user => user.password === req.query.password);
    if (!foundUser) {
        res.status(404).send();

    } else {

    if (foundUser.password === req.query.password) {
        next();
    }
    else {
        res.status(401).send();
    }
}
}
module.exports = isAuthenticated;