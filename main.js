var menubar = require('menubar')
var debug = true;

var mb = menubar({
  width: 200,
  height: 310,
  resizable: false,
})

if (debug) {
  mb.on('after-create-window', function() {
    mb.window.openDevTools({detach: true})
  })
}
