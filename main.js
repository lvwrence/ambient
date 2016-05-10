var menubar = require('menubar')
var debug = true;

var options;
if (debug) {
  options = {
    width: 200,
    height: 370,
    'always-on-top': true
  }
} else {
  options = {
    width: 200,
    height: 370,
    resizable: false,
  }
}

var mb = menubar(options);

if (debug) {
  mb.on('after-create-window', function() {
     mb.window.openDevTools({detach: true})
  })
}
