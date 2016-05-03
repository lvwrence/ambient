window.onload = function() {
  var sounds = [
    {
      'name': 'Coffeeshop',
      'path': 'sounds/coffee.mp3',
      'description': 'A gentle hum gets the day started'
    },
    {
      'name': 'Lounge',
      'path': 'sounds/lounge.mp3',
      'description': 'Bustling chatter of the lunchtime rush'
    },
    {
      'name': 'Campus',
      'path': 'sounds/campus.mp3',
      'description': 'The scholarly sounds of a campus cafe'
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
