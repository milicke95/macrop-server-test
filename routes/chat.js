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

router.get("/getChat/:id", (req, res, next) => {
    let id = req.params['id'];
    models.chats.find({ "participians": id }, (err, docs) => {
        if (err)
            res.send(err);
        else {
            res.json(docs);
            let chatID = docs[0]._id;
            models.messages.find({ 'chatID': chatID.toString() }, (err, messages) => {
                if (err)
                    res.send(err);
                else {
                    messages.forEach((message) => console.log(message.text));

                    //res.json(messages[0].text);
                }
            })
        }
    });
});

// router.get("/getChat/:id", (req, res, next) => {
//     let id = req.params['id'];
//     models.chats.find({ "participians": id }, function(err, docs) {
//         res.json(docs);
//     });

// });

module.exports = router;