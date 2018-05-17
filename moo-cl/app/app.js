import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('root'));

  function doTheStuff() {
    // var $myDiv = document.querySelector('.moo');
    
    // var top = 0;
    // var bottom = 0;
    // var left = 0;
    // var right= 0;

    // top = $myDiv.offsetTop;
    // bottom = top + $myDiv.offsetHeight;
    // left = $myDiv.offsetLeft;
    // right = $myDiv.offsetWidth;
    // console.log('d', `${top}, ${bottom}, ${left}, ${right}`);
  }

  doTheStuff();
};