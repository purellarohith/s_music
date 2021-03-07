import React, { useEffect } from 'react';
import { PERMISSIONS } from 'react-native-permissions';
import { androidCheckPermission } from '../../Permissions';
import { PlayerController } from './../PlayerControler';
import TrackPlayer from 'react-native-track-player';
import {
  usePlaybackState,
  useTrackPlayerProgress,
} from 'react-native-track-player/lib/hooks';
export const DataApi = React.createContext();
export const SongApi = React.createContext();
export const CurrentSongData = React.createContext();
export const TrackList = React.createContext();
let previous = '';
let trackList = [];

let TrackLoop = (id, path, name, mtime) => {
  trackList[id] = {
    id: id.toString(), // Must be a string, required
    url: path, // Load media from the network , appBundle , Location
    title: name.replace('.mp3', ''),
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: mtime.toString(), // RFC 3339
    // artwork: 'http://example.com/avaritia.png', // Load artwork from the network
    // artwork: require('./avaritia.jpg'), // Load artwork from the app bundle
    // artwork: 'file:///storage/sdcard0/Downloads/artwork.png', // Load artwork from the file system
  };
};

//!

export const ContextApi = ({ children }) => {
  //!
  const state = usePlaybackState();
  const { position, duration } = useTrackPlayerProgress(250);
  //!
  const [data, setData] = React.useState([]);
  const [currentSongData, setCurrentSongData] = React.useState({
    previousSong: null,
    currentSong: null,
  });
  const [track, setTrack] = React.useState({ id: null });
  const [sliderValue, setSliderValue] = React.useState(0);
  const [isSeeking, setIsSeeking] = React.useState(false);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  //
  useEffect(() => {
    (async () => {
      await androidCheckPermission(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        setData,
      );
      // console.log('UseEffect');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer({})
        .then(() => console.log('player setuped'))
        .catch((err) => console.log('err :', err));
      await TrackPlayer.updateOptions({
        stopWithApp: true,
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
          // TrackPlayer.CAPABILITY_STOP,
        ],
        // compactCapabilities: [
        //   TrackPlayer.CAPABILITY_PLAY,
        //   TrackPlayer.CAPABILITY_PAUSE,
        //   TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        //   TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        // TrackPlayer.CAPABILITY_STOP,
        // ],
      });
    })();
  }, []);

  useEffect(() => {
    TrackPlayer.getCurrentTrack().then((res) => {
      console.log('result at DAta :', res);
      if (res === null) {
        (async () => {
          trackList = [];
          data.forEach(async (item, index) => {
            // await console.table(item);
            await TrackLoop(index, item.path, item.name, item.mtime);
          });
        })().finally(async () => {
          await TrackPlayer.add(trackList);
          await console.log('completed', trackList.length);
        });
      } else {
        console.log('res =>', res);
      }
    });
  }, [data]);

  return (
    <>
      <DataApi.Provider value={[data, setData]}>
        <SongApi.Provider value={PlayerController}>
          <CurrentSongData.Provider
            value={[currentSongData, setCurrentSongData]}>
            <TrackList.Provider value={[track, setTrack]}>
              {children}
            </TrackList.Provider>
          </CurrentSongData.Provider>
        </SongApi.Provider>
      </DataApi.Provider>
    </>
  );
};
