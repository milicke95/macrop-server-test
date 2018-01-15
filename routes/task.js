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

router.get("/getAllTasks", (req, res, next) => {
    models.tasks.find((err, project) => {
        if (err)
            res.send(err);
        res.json(project);
    })
})

router.get("/getProjectTasks/:id", (req, res, next) => {
    let projectId = req.params.id;
    models.projects.find({ "projectID": projectId }, (err, project) => {
        if (err)
            res.send(err);
        res.json(project);
    })
})

module.exports = router;