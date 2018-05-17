var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);


var socket = io('http://localhost:3000');

socket.on('moomsg', function(msg){
    var $message = document.createElement("li");
    $message.innerText = msg;
    document.querySelector(".messages").appendChild($message);
});