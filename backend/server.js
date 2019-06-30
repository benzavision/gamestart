var express = require ('express'),
    session = require('express-session'),
    bodyparser = require ('body-parser'),
    cors =  = require('cors');

var logger = require('morgan');
var cookieParser = require('cookie-parser');


var routes = require('./routes/index');
var users = require('./routes/users');
var clear = require('./routes/clear');
var checkout = require('./routes/checkout');


// Initializations.
var app = express();




app.use('/', routes);
app.use('/users', users);
app.use('/checkout', checkout);
app.use('/clear', clear);


app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));


app.use(function (req,res,next) {
    res.header("Access-Control_Allow-Origin","*");
    res.header("Access-Control_Allow-Headers","Content-Type, Authorization");
    next();
});

app.use(bodyparser.json());
app.post('/api/message', function (req,res) {
    console.log(req.body);
    res.status(200);
    
});

var server = app.listen(5000,function () {
    console.log('listenimg on port ', server.address().port);
    
});



