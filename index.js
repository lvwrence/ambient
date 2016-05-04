const remote = require('electron').remote

window.onload = function() {
  var coffeeAudio = new Audio(['sounds/coffee.mp3'])
  coffeeAudio.loop = true
  var libraryAudio = new Audio(['sounds/lounge.mp3'])
  libraryAudio.loop = true
  var parkAudio = new Audio(['sounds/campus.mp3'])
  parkAudio.loop = true

  var sounds = {
    'coffee': {
      'name': 'Coffeeshop',
      'description': 'Get the day started',
      'classes': 'tile is-child notification is-primary',
      'audio': coffeeAudio,
    },
    'library': {
      'name': 'Library',
      'description': 'Stay focused',
      'classes': 'tile is-child notification is-primary',
      'audio': libraryAudio,
    },
    'park': {
      'name': 'Park',
      'description': 'Refresh yourself',
      'classes': 'tile is-child notification is-primary',
      'audio': parkAudio,
    }
  }

  new Vue({
    el: '#app',
    data: {
      sounds: sounds
    },
    methods: {
      play: function(e) {
        var id = e.currentTarget.dataset.id

        // reset all other sounds
        for (var key in this.sounds) {
          if (key !== id) {
            var sound = this.sounds[key]
            var audio = sound['audio']
            audio.pause() // stop audio
            this.sounds[key]['classes'] = 'tile is-child notification is-primary' // reset classes
          }
        }

        // begin playing selected song
        var audio = this.sounds[id]['audio']

        if (audio.paused) {
          // play and set classes
          audio.play()
          this.sounds[id]['classes'] = 'tile is-child notification is-success'
        } else {
          audio.pause()
          this.sounds[id]['classes'] = 'tile is-child notification is-primary'
        }
      },
      quit: function() {
        remote.getCurrentWindow().close()
      }
    }
  })
}
