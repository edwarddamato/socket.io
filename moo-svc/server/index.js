//1
// var http = require('http');
// var express = require('express');
// var io = require('socket.io');

function start() {
    var app = require('express')();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);

    app.set('port', process.env.PORT || 3000);

    app.get('/', function (req, res) {
        res.send('<html><body><h1>Hello World</h1></body></html>');
    });

    app.get('/moo', function (req, res) {
        res.send('<html><body><h1>Mooooo!!!</h1></body></html>');
    });

    http.listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });

    io.on('connection', function(socket){
        console.log('a user connected');
    });

    setInterval(function () {
        emitMessage(io);
    }, 1000);
};

function emitMessage(io) {
    var dateTimeNow = new Date().getTime();
    console.log(dateTimeNow);
    io.emit('moomsg', dateTimeNow);
}

module.exports.start = start;