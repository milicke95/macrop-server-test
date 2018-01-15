const express = require("express");
const router = express.Router();
//var mongojs = require("mongojs");
//var db = mongojs("mongodb://stefan:stefan281195@ds129156.mlab.com:29156/macrop", ["users"]);
const mongoose = require('mongoose');
const models = require('../schemas and models/data-model.js');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stefan:stefan281195@ds129156.mlab.com:29156/macrop", {
    useMongoClient: true,
});


router.get("/getAllUsers", (req, res, next) => {
    models.users.find((err, docs) => {
        if (err)
            res.json(err);
        res.json(docs);
    });
});


router.post('/login', (req, res, next) => {
    let user = req.body;
    console.log(user);
    if (!user || typeof user === undefined || !user.password) {
        res.status(400);
        res.json({ "error": "Bad Data" });
    } else {
        models.users.findOne({
            "username": user.username,
            "password": user.password
        }, (err, user) => {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
});

router.post("/register", (req, res, next) => {
    let user = req.body;
    console.log(user);
    if (!user || typeof user === undefined || !user.email || !user.password) {
        res.status(400);
        res.json({ "error": "Bad Data" });
    } else {
        res.json(models.users.create({
            "email": user.email,
            "username": user.username,
            "password": user.password
        }));
    }
});

module.exports = router;