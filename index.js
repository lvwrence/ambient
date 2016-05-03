window.onload = function() {
  var sounds = {
    'coffee': {
      'name': 'Coffeeshop',
      'path': 'sounds/coffee.mp3',
      'description': 'Get the day started',
      'currentlyPlaying': false,
      'classes': 'tile is-child notification is-primary'
    },
    'library': {
      'name': 'Library',
      'path': 'sounds/lounge.mp3',
      'description': 'Stay focused',
      'currentlyPlaying': false,
      'classes': 'tile is-child notification is-primary'
    },
    'park': {
      'name': 'Park',
      'path': 'sounds/campus.mp3',
      'description': 'Refresh yourself',
      'currentlyPlaying': false,
      'classes': 'tile is-child notification is-primary'
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
        var path = this.sounds[id]['path'];

        // start playing music
        mySound = new Audio([path])
        mySound.play()

        // set playing to true and such
        this.sounds[id]['currentlyPlaying'] = true;
        this.sounds[id]['classes'] = 'tile is-child notification is-success';
      }
    }
  })
}
