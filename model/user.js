var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/accounts")


var schema = new mongoose.Schema({
	username: String,
	password: String,
	account : Number 
}); 

module.exports = mongoose.model("accounts", schema);

