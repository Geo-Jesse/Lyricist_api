require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Lyrics = require('./models/lyrics');

var lyricsArr = [
  {
    band: "Beach Boys",
    songTitle: "God Only Knows",
    lyrics: "I may not always love you...",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg"
  },
  {
    band: "Rob Crow",
    songTitle: "Overtime",
    lyrics: "Oh yeah...",
    albumArt: "http://cdn2.pitchfork.com/albums/1697/71b73427.jpg"
  }
].forEach(function (lyricObject) {
  var lyric = new Lyrics(lyricObject)
  lyric.save(function (err) {
  });
});
