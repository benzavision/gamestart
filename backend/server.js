var express = require ('express');
var app = express();
var bodyparser = require ('body-parser');


app.use(function (req,res,next) {
    res.header("Access-Control_Allow-Origin","*");
    res.header("Access-Control_Allow-Headers","Content-Type, Authorization");
    next();
})

app.use(bodyparser.json());
app.post('/api/message', function (req,res) {
    console.log(req.body);
    res.status(200);
    
})

var server = app.listen(5000,function () {
    console.log('listenimg on port ', server.address().port);
    
});