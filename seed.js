require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Lyrics = require('./models/lyrics');

var lyricsArr = [
  {
    band: "Beach Boys",
    songTitle: "God Only Knows",
    lyrics: "I may not always love you
              But long as there are stars above you
              You never need to doubt it
              I'll make you so sure about it

              God only knows what I'd be without you

              If you should ever leave me
              Though life would still go on believe me
              The world could show nothing to me
              So what good would living do me

              God only knows what I'd be without you

              God only knows what I'd be without you

              If you should ever leave me
              Well life would still go on believe me
              The world could show nothing to me
              So what good would living do me

              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you
              God only knows what I'd be without you
              God only knows
              God only knows what I'd be without you",
    albumArt: 'https://upload.wikimedia.org/wikipedia/en/3/3c/God_Only_Knows_single_cover.png',
  },
  {
    band: Rob Crow,
    songTitle: Overtime,
    lyrics: "Oh yeah, it's real frightening
              to think someone owns everything
              Oh Wee Oh
              We got your Savior in our pocket
              Try to make sure that no one could
              ever own a little piece of me

              Who owns what
              and what does one say
              they can truly own?
              I know it's an illusion, but try to
              tell the landlord of my home
              A tiny little box is all and you're
              that I know can handle
              try to raise a kid in there and
              use the room that's like an angle

              Trying to thin us out
              Some kind of genocide amongst
              the classes
              Hoping we'll all kill each other
              til a generation passes
              That's if we can find the time
              between the kids and work
              and sleep and working at
              some shitty job with no
              respect, but lots of fucking
              overtime, and then to bed

              Stay up too late, you'll never
              get up in time for work
              So go to sleep and try
              to dream of killing your boss",
    albumArt: "http://vignette4.wikia.nocookie.net/lyricwiki/images/0/05/Rob_Crow_-_My_Room_Is_A_Mess.jpg/revision/latest?cb=20110313005254",
  }
].forEach(function (lyricObject) {
  var lyric = new Lyrics(lyricObject)
  lyric.save(function (err) {
  });
});
