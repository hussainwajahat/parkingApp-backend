var express = require("express");
var app=express();
const cors = require('cors');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const ObjectID = require("mongodb").ObjectID;
const mongojs = require("mongojs");
var http = require('http');
const userInfo = require('./models/usersInfo/userController')
require('dotenv').config();


// const DB = mongojs("mongodb://admin:admin@ds123499.mlab.com:23499/tourhubdb", ["createTour"]);
const LocalStrategy = require('passport-local').Strategy;
// CORS origin
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//Tourist=require('./models/tourist');
//connect to Mongoose
var uri='mongodb://admin:admin1122@ds046549.mlab.com:46549/parking-app';
mongoose.connect(uri,{ useMongoClient: true });
var db=mongoose.connection;
//db.open('localhost/tourhubdb',{useMongoClient: true});
require('./models/passport')(passport);
app.use('/locations', require('./models/locations'));
app.use('/garages', require('./models/garages'));
app.use('/usersInfo', require('./models/usersInfo'));
app.use('/bookings', require('./models/bookGarages'));
app.get('/',function(req, res){ 
    res.send("EXPRESS SERVER");
});

/* app.post('/login', passport.authenticate('login',{
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));
    app.get('/register', function(req, res){
        res.json({message: req.flash('registerMessage')});
    });*/
    app.post("/login",
function(req,res,next){
    passport.authenticate('login', function(err, user, info){
      
    //console.log (res.json( user)) 
 let q = {}
    q['userScehmaId'] = info._id;
    q['OneToken'] =  req.body.OneToken
    userInfo.updateToken(q,res)

    //res.json( user);
})(req,res,next); 
});
app.use(passport.initialize());
app.use(passport.session());

app.post("/register",
function(req,res,next){
    passport.authenticate('register', function(err, user, info){

      req.body.userScehmaId = info.id
      userInfo.createUser(req,res)
      //res.json( user);      
})(req,res,next); 
});
    /*app.post('/register', passport.authenticate('register',{
        successRedirect : '/profile',
        failureRedirect : '/register',
        failureFlash : true
    }));*/
    app.get('/profile', isLoggedIn, function(req,res){
        res.json({user : req.user});
    });
    app.get('/logout', function(req,res){
        req.logout();
        res.redirect('/');
    });
    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
        return next();
        res.redirect('/');
    };
    var server = http.createServer(app);
    var io = require('socket.io')(server);
    require('./socket')(io);
    app.use('/events', (req,res,next)=> {
        req.io = io;
        next();
    },require('./models/events'));

let port = (process.env.PORT || '3000')
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('listening on port', port);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    console.log('in onlistening function Listening on ' + bind);
  }