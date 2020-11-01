export {};
import User from './../models/user';

const getUserCallback = (req, res): void => {
    User.findOne({ username: req.query.username})
    .then(user => {
        res.send(user);
    })
    .catch(err => {
        console.error(err);
    });
}

const updateUserCallback = (req, res): void => {
    const user = req.body;
    User.update({}, user)
    .then(user => {
        res.send(["model updated!"]);
    })
    .catch(err => {
        res.send(["Error!"]);
    });
}

export { getUserCallback, updateUserCallback };

