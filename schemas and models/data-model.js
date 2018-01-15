const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let usersSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    isAdmin: String
});

let tasksSchema = mongoose.Schema({
    name: String,
    body: String,
    projectID: String,
    responsible: []
});

let projectSchema = mongoose.Schema({
    name: String,
    owners: [],
    tasks: [],
    participians: [],
});

let chatSchema = mongoose.Schema({
    participians: []
});

let messageSchema = mongoose.Schema({
    author: String,
    text: String,
    chatID: String
});

exports.users = mongoose.model("users", usersSchema);
exports.tasks = mongoose.model("tasks", tasksSchema);
exports.projects = mongoose.model("projects", projectSchema);
exports.chats = mongoose.model("chat", chatSchema);
exports.messages = mongoose.model("messages", messageSchema);