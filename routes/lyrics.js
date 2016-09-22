var express = require('express');
var router = express.Router();
var Lyric = require('../models/lyric');
const _ = require('lodash');

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['band', 'songTitle', 'lyrics', 'albumArt'])
  next()
});

//GET
router.get('/', function(req, res, next) {
  Lyric.find({}, function(err, lyrics) {
    if (err) {
      console.log(err);
      res.status(500).send()
    } else {
      res.json(lyrics)
    }
  })
});



//GET BY songTitle
router.get('/:songTitle', function (req, res, next) {
  Lyric.find({'songTitle' : new RegExp (req.params.songTitle, "i")}, function (err, songTitle) {
    if (err) {
      res.status(500).send()
    } else {
      if (songTitle) {
        res.json(songTitle)
      } else {
        res.status(404).send()
      }
    }
  })
})


// //POST
// // '/' refers to "lyrics"
// router.post('/', function (req, res, next) {
//   const lyric = new Lyrics(req.body)
//   lyric.save(function (err) {
//     if (err) {
//       res.status(500).send()
//     } else {
//       res.json(lyric)
//     }
//   })
// })


// //PUT
// router.put('/:lyricId', function (req, res, next) {
//   Lyrics.findByIdAndUpdate(req.params.lyricId, { $set: req.body }, function (err, lyric) {
//     if (err) {
//       res.status(500).send()
//     } else {
//       if (lyric) {
//         Lyrics.findById(req.params.lyricId, function (err, updatedLyrics) {
//           res.json(updatedLyrics)
//         })
//       } else {
//         res.status(404).send()
//       }
//     }
//   })
// })



// router.delete('/:lyricId', function (req, res, next) {
//   Lyric.findById(req.params.lyricId).remove(function (err) {
//     if (err) {
//       res.status(500).send()
//     } else {
//       res.status(204).send()
//     }
//   })
// })
//
//
module.exports = router;
