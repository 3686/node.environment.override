module.exports = {
	override : function(path) {
		var json = require(path);
		for(var prop in json) {
			process.env[prop] = json[prop];
		}
	}
}
