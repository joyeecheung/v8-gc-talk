'use strict';

const express = require('express');
const app = express();

var GIANT;

function leak() {
  var HUGE = GIANT;

  function notAClosureAnymore(HUGE_ARG) {
    HUGE_ARG.slice(1);
  }

  GIANT = {
    willBeLeaked: new Array(1e5).join('.'),
    notAClosure: function notAClosure() {
      return 1;
    }
  }
}

app.get('/', function handler(req, res) {
  leak();
  console.log(new Date());
  res.send('Hello World!');
});

app.listen(3000, function startApp() {
  console.log('Example app listening on port 3000!');
});