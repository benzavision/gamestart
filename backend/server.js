var express = require ('express'),
    session = require('express-session'),
    bodyparser = require ('body-parser'),
    cors =  = require('cors');





// Initializations.
var app = express();

app.use(cors());

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



