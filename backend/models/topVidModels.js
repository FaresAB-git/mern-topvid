const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topVid = new Schema({
    titre: {
        type : String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
    

}, {timestamps: true})


module.exports = mongoose.model('TopVid', topVid);