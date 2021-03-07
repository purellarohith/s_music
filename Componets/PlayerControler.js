import TrackPlayer from 'react-native-track-player';

export const PlayerController = (
  item,
  index,
  songstate,
  songfuctiontype,
  data,
  setData,
  currentsongData,
  setCurrentSongData,
  track,
  setTrack,
) => {
  // console.log(
  //   'item : ',
  //   item,
  //   'index : ',
  //   index,
  //   'songstate : ',
  //   songstate,
  //   'songfuctiontype : ',
  //   songfuctiontype,
  //   'data : ',
  //   data,
  //   'setData : ',
  //   setData,
  //   'currentsongData : ',
  //   currentsongData,
  //   'setCurrentSongData : ',
  //   setCurrentSongData,
  // );

  if (songfuctiontype === 'play') {
    console.log('playing from ', index);
    if (track.id !== index.toString()) {
      TrackPlayer.skip(index.toString())
        .then(() => {
          TrackPlayer.play();
        })
        .catch((err) => console.log('error while playing'));
    }
    if (track.id === index.toString()) {
      TrackPlayer.play();
    }
  }
  if (songfuctiontype === 'pause') {
    if (track.id !== index.toString()) {
      TrackPlayer.skip(index.toString())
        .then(() => {
          TrackPlayer.play();
        })
        .catch((err) => console.log('error while playing'));
    }
    if (track.id === index.toString()) {
      TrackPlayer.pause();
    }
  }
  if (songfuctiontype === 'nextSong') {
    TrackPlayer.skipToNext();
  }

  if (songfuctiontype === 'prevSong') {
    TrackPlayer.skipToPrevious();
  }
};
