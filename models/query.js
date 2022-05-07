var mongoose = require("mongoose");

var query = new mongoose.Schema({
    description: String
    
});

module.exports = mongoose.model("Query",query);