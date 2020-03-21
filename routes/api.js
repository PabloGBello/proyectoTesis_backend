const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const Tracks = require('./../models/track');

const mergeTracks = require('../controllers/tracks');

router.get('/', (req, res) => {
    res.end();
});

router.get('/login/', (req, res) => {
    res.end('Login!');
});

// GET User
router.get('/api/users/', (req, res) => {
    User.findOne({ username: req.query.username})
    .then( user => {
        res.send(user);
    })
    .catch( err => {
        console.error(err);
    });
});

// GET Tracks
router.get('/api/tracks/', (req, res) => {
    Tracks.findOne({ username: req.query.username})
    .then( tracks => {
        res.send(tracks);
    })
    .catch( err => {
        console.error(err);
    });
});

// GET ALL Tracks
router.get('/api/tracks/getAll/', (req, res) => {
    Tracks.find({ username: req.query.username}).limit(10)
    .then( tracks => {
        res.send(mergeTracks(tracks));
    })
    .catch( err => {
        console.error(err);
    });
});

// TODO: UPDATE User


router.get('*', (req, res) => {
    res.end('Route not found!');
});

module.exports = router;