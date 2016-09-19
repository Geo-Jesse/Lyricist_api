require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Lyrics = require('./models/lyrics');

var lyricsArr = [
  {
    band: "Beach Boys",
    songTitle: "God Only Knows",
    lyrics: "I may not always love you...",
    albumArt: ""
  },
  {
    band: "Rob Crow",
    songTitle: "Overtime",
    lyrics: "Oh yeah...",
    albumArt: ""
  }
].forEach(function (lyricObject) {
  var lyric = new Lyrics(lyricObject)
  lyric.save(function (err) {
  });
});
