const remote = require('electron').remote
var app = remote.require('app')

window.onload = function() {
  var coffeeAudio = new Audio(['sounds/coffee.mp3'])
  coffeeAudio.loop = true
  var libraryAudio = new Audio(['sounds/library.mp3'])
  libraryAudio.loop = true
  var parkAudio = new Audio(['sounds/park.mp3'])
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
      sounds: sounds,
      currentlyPlaying: null,
      currentVolume: 100,
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
          this.currentlyPlaying = audio
          this.currentlyPlaying.volume = this.currentVolume / 100.0
        } else {
          audio.pause()
          this.sounds[id]['classes'] = 'tile is-child notification is-primary'
        }
      },
      quit: function() {
        app.quit()
      },
      changeVolume: function(e) {
        var requestedVolume = e.offsetX / 100.0
        this.currentVolume = requestedVolume * 100
        if (this.currentlyPlaying) {
          this.currentlyPlaying.volume = requestedVolume
        }
      }
    }
  })
}
