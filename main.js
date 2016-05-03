var menubar = require('menubar')
var debug = false;

if (debug) {
  var mb = menubar({
    width: 400,
    height: 600,
    resizable: false
  })

  mb.on('after-create-window', function() {
    mb.window.openDevTools()
  })
} else {
  var mb = menubar({
    width: 200,
    height: 310
  })
}

