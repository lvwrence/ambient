window.onload = function() {
  var sounds = [
    {
      'name': 'Coffeeshop',
      'path': 'sounds/coffee.mp3',
      'description': 'blahblahblah'
    },
    {
      'name': 'A Walk',
      'path': 'sounds/a_walk.mp3',
      'description': 'blahblahblah'
    },
    {
      'name': 'Wildlife Analysis',
      'path': 'sounds/wildlife.mp3',
      'description': 'blahblahblah'
    }
  ]

  new Vue({
    el: '#app',
    data: {
      sounds: sounds
    }
  })

  // mySound = new Audio(['sounds/a_walk.mp3'])
  // mySound.play()
}
