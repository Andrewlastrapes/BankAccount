var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");



var schema = new mongoose.Schema({
	username: String, unique: true,
	password: String,
	account : Number 
}); 

schema.methods.encryptPassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null); 
}

schema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
	 
}

module.exports = mongoose.model("accounts", schema);

