var Sequelize = require('sequelize');
var sequelize;
	sequelize= new Sequelize(undefined, undefined, undefined, {
	'dialect' : 'sqlite',
	'storage' : __dirname+ '/data/user4.sqlite'
});

 
var db = {};

db.user=sequelize.import(__dirname+ '/models/user.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;