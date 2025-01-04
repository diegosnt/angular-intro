interface AudioPlayer {
  audioVolum: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: string;
}

const audioPlayer: AudioPlayer = {
  audioVolum: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: "2015",
  },
};

const song = 'New Song';

const {
        song:anotherSong, 
        songDuration:duration, 
        details } = audioPlayer;

const {author} = details

//console.log('Details 1:', author);
//console.log('Duration:', duration);
//console.log('Song:', song);
//console.log('Anather Song:', anotherSong);
//console.log('Duration:', audioPlayer.songDuration);
//console.log('Author:', audioPlayer.details.author);

const [, , trunks = 'Not fount' ] : string[] = ['Goku', 'Vegeta' ];

//const trunks = dbz[2] || 'No hay personaje';



console.error('Personaje 3: ', trunks);


export {};
