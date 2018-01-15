const mongoose = require('mongoose');
const models = require('../schemas and models/data-model.js');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stefan:stefan281195@ds129156.mlab.com:29156/macrop", {
    useMongoClient: true,
});

var songSchema = mongoose.Schema({
    decade: String,
    artist: String,
    song: String,
    weeksAtOne: Number
});
var Song = mongoose.model('songs', songSchema);
models.chat.find((err, results) => {
    if (err) {
        console.error(err)
        process.exit(1)
    } else {
        console.log('Found: ', results)
        process.exit(0)
    }
});


// let simpleChat = new models.chat({ participians: ["dasdasd23971231279"] });
// simpleChat.save((err, results) => {
//     if (err) {
//         console.error(err)
//         process.exit(1)
//     } else {
//         console.log('Saved: ', results)
//         process.exit(0)
//     }
// });