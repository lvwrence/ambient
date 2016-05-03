window.onload = function() {
  var sounds = {
    'coffee': {
      'name': 'Coffeeshop',
      'description': 'Get the day started',
      'classes': 'tile is-child notification is-primary',
      'audio': new Audio(['sounds/coffee.mp3']),
    },
    'library': {
      'name': 'Library',
      'description': 'Stay focused',
      'classes': 'tile is-child notification is-primary',
      'audio': new Audio(['sounds/lounge.mp3']),
    },
    'park': {
      'name': 'Park',
      'description': 'Refresh yourself',
      'classes': 'tile is-child notification is-primary',
      'audio': new Audio(['sounds/campus.mp3']),
    }
  }

  new Vue({
    el: '#app',
    data: {
      sounds: sounds
    },
    methods: {
      play: function(e) {
        // reset all other sounds
        for (var key in this.sounds) {
          var sound = this.sounds[key]
          var audio = sound['audio']
          audio.pause() // stop audio
          this.sounds[key]['classes'] = 'tile is-child notification is-primary' // reset classes
        }

        // begin playing selected song
        var id = e.currentTarget.dataset.id
        var sound = this.sounds[id]
        var audio = sound['audio']
        audio.play()

        // set to true
        this.sounds[id]['classes'] = 'tile is-child notification is-success';
      }
    }
  })
}
