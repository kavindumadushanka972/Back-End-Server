var express = require('express');
var router = express.Router();
var User = require('../models/user');

// Here when we load the page, it show us the first email in the first dataset of the user
router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err) throw err;
        res.render('node', {email: doc.email});
    });
    
});

// Post the details about users
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        password: req.body.pass,
        email:  req.body.email
    });
    user.save();
    console.log(user);
    res.redirect('/');
});
module.exports = router;
