var menubar = require('menubar')
var debug = false;

var mb = menubar({
  width: 200,
  height: 370,
  resizable: false,
})

if (debug) {
  mb.on('after-create-window', function() {
     mb.window.openDevTools({detach: true})
  })
}
