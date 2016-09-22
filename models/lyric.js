var mongoose = require('mongoose');

var lyricSchema = {
  band: String,
  songTitle: String,
  lyrics: String,
  albumArt: String,
}

var Lyric = mongoose.model('Lyric', lyricSchema);


module.exports = Lyric;
