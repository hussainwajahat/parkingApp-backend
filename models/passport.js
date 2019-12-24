const LocalStrategy = require('passport-local').Strategy;

const User = require ('./tourist');
module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('register',new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true
    },
    function(req,email, password, done) {
      console.log(email);
        User.findOne({ email: email }, function(err, user) {
        if (err) { return done(err); }
        if (user) {
            return done(null, false, false);
        }else{
            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.generateHash(password);
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.contactNo = req.body.contactNo;
            newUser.save(function(err){
            if(err) throw err;
            return done(null,true,newUser);
        });
        }
        });
}));

  passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true
    },
    function(req,email, password, done) {
      User.findOne({email: email }, function(err, user) {
        // console.log(user,'usereserserers');
        if (err) { return done(err); }
        if (!user) {
          console.log('no user ')
          return done(null, false, { message : 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          console.log('kjhkjhk')
          //console.log(done)
          return done(null, false, { message : 'Incorrect password!' });
        }
        //console.log (   'jhjhgjhgjh');
        return   done (null,user,user) ;
      });
    }
  ));
};