
const Users = require('./../models/user');

const getUserCallback = (req, res) => {
    Users.findOne({ username: req.query.username})
    .then( user => {
        res.send(user);
    })
    .catch( err => {
        console.error(err);
    });
}

module.exports = getUserCallback;
