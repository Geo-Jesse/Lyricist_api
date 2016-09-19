const mongoose = require('mongoose');

var lyricsSchema = {
  band: String,
  songTitle: String,
  lyrics: String,
  albumArt: String,
}

const Lyrics = mongoose.model('Lyrics', lyricsSchema);


module.exports = Lyrics;
