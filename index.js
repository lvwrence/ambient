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
      'name': 'Cafe',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/cafe-15.svg',
      'audio': coffeeAudio,
    },
    'library': {
      'name': 'Library',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/library-15.svg',
      'audio': libraryAudio,
    },
    'park': {
      'name': 'Park',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/park-15.svg',
      'audio': parkAudio,
    },
    'bakery': {
      'name': 'Bakery',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/bakery-15.svg',
      'audio': parkAudio,
    },
    'rain': {
      'name': 'Rain',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/water-15.svg',
      'audio': parkAudio,
    },
    'fireplace': {
      'name': 'Fireplace',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/fire-station-15.svg',
      'audio': parkAudio,
    },
    'railroad': {
      'name': 'Railroad',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/rail-15.svg',
      'audio': parkAudio,
    },
    'railroad': {
      'name': 'Waves',
      'titleClasses': 'title is-5',
      'icon': './lib/svgs/dam-15.svg',
      'audio': parkAudio,
    },
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

        // begin playing selected song
        var audio = this.sounds[id]['audio']

        if (audio.paused) {
          // play and set classes
          audio.play()
          this.sounds[id]['titleClasses'] = 'title is-5 playing'
          this.currentlyPlaying = audio
          this.currentlyPlaying.volume = this.currentVolume / 100.0
        } else {
          audio.pause()
          this.sounds[id]['titleClasses'] = 'title is-5'
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
