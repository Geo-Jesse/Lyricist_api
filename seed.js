require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Lyrics = require('./models/lyric');

var lyricsArr = [
  {
    band: "Beach Boys",
    songTitle: "God Only Knows",
    lyrics: "THE BEACH BOYS \n 'God Only Knows' \n\n I may not always love you \n But long as there are stars above you \n You never need to doubt it \n I'll make you so sure about it \n \n God only knows what I'd be without you \n \n If you should ever leave me \n Though life would still go on, believe me \n The world could show nothing to me \n So what good would livin' do me \n \n God only knows what I'd be without you \n God only knows what I'd be without you \n \n If you should ever leave me \n Though life would still go on, believe me \n The world could show nothing to me \n So what good would livin' do me \n \n God only knows what I'd be without you",
    albumArt: "https://upload.wikimedia.org/wikipedia/en/b/bb/PetSoundsCover.jpg"
  },
  {
    band: "The White Stripes",
    songTitle: "Dead Leaves And the Dirty Ground",
    lyrics: "THE WHITE STRIPES \n 'Dead Leaves and the Dirty Ground' \n\n Dead leaves and the dirty ground when I know you're not around \n Shiny tops and soda pops when I hear your lips make a sound \n \n Thirty notes in the mailbox will tell you that I'm coming home \n And I think I'm gonna stick around for a while so you're not alone \n \n If you can hear a piano fall you can hear me coming down the hall \n If I could just hear your pretty voice I don't think I need to see at all \n \n Soft hair and a velvet tongue I want to give you what you give to me \n And every breath that is in your lungs is a tiny little gift to me \n \n I didn't feel so bad till the sun went down \n Then I come home \n No one to wrap my arms around \n \n Well any man with a microphone can tell you what he loves the most \n And you know why you love at all if you're thinking of the holy ghost",
    albumArt: "http://www.backseatmafia.com/wp-content/uploads/2016/07/JBWSWBC.jpg"
  },
  {
    band: "Albatross",
    songTitle: "Bhool",
    lyrics: "ALBATROSS \n 'Bhool' \n\n Mauka paye \n sachayun thiye \n So chai sochma, mauka gumaye \n \n Bhool mabata bhayecha yo kasto \n Risai ris ma Jan ris oothey justo \n \n Din aauncha bhani parkhi basey \n Parkhaimai din bhooli diye \n Chodi aaye aafno chahana lai \n Todi diya sabai bandhan \n \n Bhool bhayecha yo kasto \n Chokho maya nabujey justo \n Bhool bhayecha yo kasto \n na sodha malai \n \n Aandhi yo chalna deuoo \n Afulai naroka \n Bho Bho teti nasatau \n Sakdina sumpinna ma \n \n Badhyata mero bujhi deu \n Bujhe ko chu timro chahana lai \n Timra harek bahana \n Harek bhawana haru lai \n \n Bhoolai bhoolma bhool bhayo \n Bhoolai bhoolma bhooley chu ma",
    albumArt: "https://f4.bcbits.com/img/a2456780782_10.jpg"
  },
  {
    band: "Aphex Twin",
    songTitle: "Come to Daddy",
    lyrics: "APHEX TWIN \n 'Come to Daddy' \n\n I want your soul, \n I will eat your soul. \n \n Come to daddy. \n \n I want your soul. \n \n Aaaaaaaaaaaaaaargh.",
    albumArt:"http://www.lololyrics.com/img/cover/5050.jpeg"
  },
  {
    band: "Edith Piaf",
    songTitle: "La Vie en Rose",
    lyrics: "EDITH PIAF \n 'La Vie en Rose' \n\n Hold me close and hold me fast \n The magic spell you cast \n This is la vie en rose \n When you kiss me heaven sighs \n And tho I close my eyes \n I see la vie en rose \n \n When you press me to your heart \n I'm in a world apart \n A world where roses bloom \n And when you speak, angels sing from above \n Everyday words seem to turn into love songs \n Give your heart and soul to me \n And life will always be la vie en rose.",
    albumArt:"https://i.ytimg.com/vi/kFzViYkZAz4/hqdefault.jpg"
  },
  {
    band: "Ryan Adams",
    songTitle: "Cold Roses",
    lyrics: "RYAN ADAMS \n 'Cold Roses' \n\n Mirrors in the room go black and blue \n On a Sunday morning in Saturday shoes \n We don't choose who we love \n We don't choose \n \n In a Sunday suit, with the Saturday beat \n She don't love who she chose \n She don't need what she do \n \n Daylight comes in exposin' \n Saturday bruises and cold roses \n Cold roses \n \n Nothin' but the sunlight'll help you grow from underneath your bed \n You can't see the window \n We don't choose what we see \n We don't choose \n \n Fortunate and angry just like a child \n All that money buys you medicine but can't buy you time \n We don't choose what we love \n And she don't need what she got \n \n Daylight comes in exposin' \n Saturday bruises and cold roses \n Cold roses \n \n Cold roses \n Cold roses \n Cold roses",
    albumArt:"https://en.wikipedia.org/wiki/Cold_Roses#/media/File:Cold_roses.jpg"
  },
  {
    band: "Bob Dylan",
    songTitle: "Knockin on Heavens Door",
    lyrics: "BOB DYLAN \n 'Knockin on Heavens Door' \n\n Mama, take this badge off of me \n I can't use it anymore \n It's gettin' dark, too dark to see \n I feel like I'm knockin' on heaven's door \n \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door \n \n Mama, put my guns in the ground \n I can't shoot them anymore \n That long black cloud is comin' down \n I feel like I'm knockin' on heaven's door \n \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door \n Knock, knock, knockin' on heaven's door",
    albumArt:"https://en.wikipedia.org/wiki/Knockin%27_on_Heaven%27s_Door#/media/File:Bob_Dylan_-_Knockin_on_Heavens_Door.jpg"
  },
  {
    band: "Hank Williams",
    songTitle: "Ramblin Man",
    lyrics: "HANK WILLIAMS \n 'Ramblin Man' \n\n I can settle down and be doin' just fine \n Til' I hear an old train rollin' down the line \n Then I hurry straight home and pack \n And if I didn't go, I believe I'd blow my stack \n \n I love you baby, but you gotta understand \n When the Lord made me, He made a Ramblin' Man \n \n Some folks might sa-ay that I'm no good \n That I wouldn't settle down if I could \n But when that open ro-oad starts to callin' me \n There's somethin' o'er the hill that I gotta see \n \n Sometimes it's har-rd but you gotta understand \n When the Lord made me, He made a Ra-amblin' Man \n \n I love to see the towns a-passin' by \n And to ride these rails, 'neath God's blue sky \n Let me travel this land from the mountains to the sea \n 'Cause that's the life I believe, He meant for me \n \n And when I'm go-one and at my grave you stand \n Just say God called home your Ra-amblin' Man",
    albumArt:"http://e.snmc.io/lk/f/l/527dc1c7edda98c9b99b27caff6c6d02/2544443.jpg"
  },
  {
    band: "Die Antwoord",
    songTitle: "I Fink U Freeky",
    lyrics: "DIE ANTWOORD \n 'I Fink U Freeky' \n\n Sexy boys, fancy boys, playboys, bad boys \n I fink u freeky and I like you a lot [x4] \n \n Motherfuckers get buzzed off the spice that I bring \n Guess who's got the party jumpin'? \n Glow in the dark rave, aura pumping \n It's nice and different, yo fuck the the system \n My system pumps off it's fucking face \n Step into my world nou's jy tuis in paradys \n Yo word up to my brother, muis \n Pump up your speakers, God se Jesus. \n Kyk wies rapping, lekker to the drum \n These bad boys like to smack me in the bum \n My crew's blowing up like Chappies bubblegum \n Popping in your face, nyaaaa \n Yo fuck the rat race my style is rap rave \n My crew is kak fresh, so who the fuck cares? \n What you fucking think, I'm the type of chick \n Who rolls with spif giftige misfits \n \n I fink u freeky and I like you a lot [x8] \n \n Hold up! Whoa, whoa wait a minute-minute, Jesus Christ \n
    Yo my man DJ High Tek Shit, this motherfucking beat is nice \n Back in the day them dwankies didn't want to believe in us \n Little did they know that they was in for a motherfucking big surprise. \n Left home locked in my Zef Zone \n Ready for the test yo? What the fuck, I guess so... \n Hit the overseas, motherfucker's heads get blown. \n Get everything will be free like Dr. Dre Beats headphones \n When I get home I lounge on my Zef throne \n Make my mummy happy cause I get so paid \n Making my money rapping over techno rave \n I can take you 'round the world, let's go babe \n When I step up and do my thing I put you in a trance \n My Zef motherfucking clique got it going on \n Fuck what you think, I do what I want \n I can make a million little motherfuckers jump \n \n Jump motherfucker, jump motherfucker jump [x4] \n  \n Increase the peace, don't wreck the party \n And fuck da jol up for everybody \n Ek's a laarney, jy's a gam \n Want jy lam innie mang, met jou slang in a man \n  \n I fink u freeky and I like you a lot [x8] \n Now why you loer en kyk gelyk? \n Is ek miskien van goud gemake? \n You want to fight, you come tonight. \n Ek moer jou sleg! So jy hardloop weg. \n  \n God se Jesus, we come to party \n Pump your speakers, yo rock your body \n In God we trust, You can't fuck with us \n We not taking kak, I'd like to say what's up \n  \n To my sexy boys, and my fancy boys, \n And my playboys, and my bad boys, \n And my pretty boys, and my ugly boys, \n And my naughty boys, \n We gonna have a nice time kids \n  \n I fink u freeky and I like you a lot [x8]",
    albumArt:"https://images-na.ssl-images-amazon.com/images/I/41mS79yH4vL.jpg"
  },
  {
    band: "Slayer",
    songTitle: "Reign in Blood",
    lyrics: "SLAYER \n 'Reign in Blood' \n \n  Trapped in purgatory \n A lifeless object, alive \n Awaiting reprisal \n Death will be their acquittance \n  \n The sky is turning red \n Return to power draws near \n Fall into me, the sky's crimson tears \n Abolish the rules made of stone \n  \n Pierced from below, souls of my treacherous past \n Betrayed by many, now ornaments dripping above \n  \n Awaiting the hour of reprisal \n Your time slips away \n  \n Raining blood \n From a lacerated sky \n Bleeding its horror \n Creating my structure \n Now I shall reign in blood!",
    albumArt:"http://s3.amazonaws.com/rapgenius/Slayer+cover.jpg"
  }
].forEach(function (lyricObject) {
  var lyric = new Lyrics(lyricObject)
  lyric.save(function (err) {
  });
});
