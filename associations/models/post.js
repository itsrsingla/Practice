var mongoose = require("mongoose");
// POST SCHEMA FIRST

var postSchema = new mongoose.Schema({
    title : String,
    content : String
});

module.exports = mongoose.model("post",postSchema);