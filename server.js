var express=require('express');
var bodyParser=require('body-parser');
var _=require('underscore');
var db = require('./db.js');
var app=express();
var cors = require('cors');
app.use(cors());
var PORT=3000;
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

// app.post('/users', function (req,res) {
// 	var body = _.pick(req.body,'id','firstname','lastname','email','password');
// 	db.user.create(body).then(function (user) {
//         res.json(user.toJSON());
// 	}, function(e) {
// 		res.status(400).json(e);
// 	});
//     });

     app.post('/users', function (req,res) {
     var body = _.pick(req.body,'email','password');
     if(typeof body.email !== 'string' ) {
         return res.status(400).send();
     }
     db.user.findOne({
        where: {
          email: body.email,
          password: body.password
             }
    }) .then(function(user){
        if(!user){
            return res.status(401).send();
        }
        res.json(user.toJSON());
        }, function(e) {
         res.status(500).send();
    });
});

    db.sequelize.sync().then(function() {
        app.listen(PORT, function(){
            console.log('Express listening on port:' + PORT + '!');
        });	
        });
  