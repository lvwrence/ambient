window.onload = function() {
  var sounds = [
    {
      'name': 'Coffeeshop',
      'path': 'sounds/coffee.mp3',
      'description': 'Get the day started'
    },
    {
      'name': 'Library',
      'path': 'sounds/lounge.mp3',
      'description': 'Stay focused'
    },
    {
      'name': 'Park',
      'path': 'sounds/campus.mp3',
      'description': 'Refresh yourself'
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
