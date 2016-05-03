var menubar = require('menubar')
var mb = menubar({
  width: 200,
  height: 300
})

mb.on('after-create-window', function() {
  // mb.window.openDevTools()
})
