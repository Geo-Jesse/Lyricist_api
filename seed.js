require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Lyrics = require('./models/lyrics');

var lyricsArr = [
  {
    band: "Beach Boys",
    songTitle: "God Only Knows",
    lyrics: "I may not always love you, But long as there are stars above you, You never need to doubt it, I'll make you so sure about it, God only knows what I'd be without you, If you should ever leave me, Though life would still go on, believe me, The world could show nothing to me, So what good would livin' do me, God only knows what I'd be without you, God only knows what I'd be without you, If you should ever leave me, Though life would still go on, believe me, The world could show nothing to me, So what good would livin' do me, God only knows what I'd be without you",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg"
  },
  {
    band: "The White Stripes",
    songTitle: "Dead Leaves And the Dirty Ground",
    lyrics: "Dead leaves and the dirty ground when I know you're not around, shiny tops and soda pops when I hear your lips make a sound, Thirty notes in the mailbox will tell you that I'm coming home and I think I'm gonna stick around for a while so you're not alone - If you can hear a piano fall you can hear me coming down the hall, if I could just hear your pretty voice I don't think I need to see at all, Soft hair and a velvet tongue I want to give you what you give to me, and every breath that is in your lungs is a tiny little gift to me, I didn't feel so bad till the sun went down then I come home no one to wrap my arms around, Well any man with a microphone can tell you what he loves the most and you know why you love at all if you're thinking of the holy ghost",
    albumArt: "http://www.backseatmafia.com/wp-content/uploads/2016/07/JBWSWBC.jpg"
  },
  {
    band: "Albatross",
    songTitle: "Bhool",
    lyrics: "Mauka paye sachayun thiye, So chai sochma, mauka gumaye, Bhool mabata bhayecha yo kasto, Risai ris ma Jan ris oothey justo, Din aauncha bhani parkhi basey, Parkhaimai din bhooli diye, Chodi aaye aafno chahana lai, Todi diya sabai bandhan, Bhool bhayecha yo kasto, Chokho maya nabujey justo, Bhool bhayecha yo kasto na sodha malai, Aandhi yo chalna deuoo, Afulai naroka, Bho Bho teti nasatau Sakdina sumpinna ma Badhyata mero bujhi deu Bujhe ko chu timro chahana lai, Timra harek bahana Harek bhawana haru lai Bhoolai bhoolma bhool bhayo, Bhoolai bhoolma bhooley chu ma",
    albumArt: "https://f4.bcbits.com/img/a2456780782_10.jpg"
  }
].forEach(function (lyricObject) {
  var lyric = new Lyrics(lyricObject)
  lyric.save(function (err) {
  });
});
