var express = require('express');
var router = express.Router();
var Lyrics = require('../models/Lyrics')
const _ = require('lodash');

router.use(function (req, res, next) {
  req.body = _.pick(req.body, ['band', 'songTitle', 'lyrics', 'albumArt'])
  next()
})

//GET
router.get('/', function(req, res, next) {
  Lyrics.find({}, function(err, lyrics) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(lyrics)
    }
  })
});

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

//GET BY ID
router.get('/:lyricId', function (req, res, next) {
  Lyrics.findById(req.params.lyricId, function (err, lyric) {
    if (err) {
      res.status(500).send()
    } else {
      if (lyric) {
        res.json(lyric)
      } else {
        res.status(404).send()
      }
    }
  })
})

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



router.delete('/:lyricId', function (req, res, next) {
  Lyric.findById(req.params.lyricId).remove(function (err) {
    if (err) {
      res.status(500).send()
    } else {
      res.status(204).send()
    }
  })
})


module.exports = router;
