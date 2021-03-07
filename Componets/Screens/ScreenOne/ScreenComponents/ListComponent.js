// Main Imports
import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import SongIcon from 'react-native-vector-icons/Foundation';
// import ContextApi
import { DataApi, CurrentSongData, TrackList } from '../../../Context/Context';
import {
  // usePlaybackState,
  useTrackPlayerEvents,
  // useTrackPlayerProgress,
} from 'react-native-track-player/lib/hooks';
import TrackPlayer, {
  STATE_PLAYING,
  TrackPlayerEvents,
  STATE_NONE,
  STATE_BUFFERING,
  STATE_PAUSED,
  STATE_READY,
  STATE_STOPPED,
} from 'react-native-track-player';
import { PLAYBACK_STATE } from 'react-native-track-player/lib/eventTypes';
// import Lib
import MediaMeta from 'react-native-media-meta';
import { PlayerController } from '../../../PlayerControler';

let dimension = Dimensions.get('window');
let copyData = [];
const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.PLAYBACK_QUEUE_ENDED,
  TrackPlayerEvents.PLAYBACK_TRACK_CHANGED,
  TrackPlayerEvents.REMOTE_BOOKMARK,
  TrackPlayerEvents.REMOTE_DISLIKE,
  TrackPlayerEvents.REMOTE_DUCK,
  TrackPlayerEvents.REMOTE_JUMP_BACKWARD,
  TrackPlayerEvents.REMOTE_JUMP_FORWARD,
  TrackPlayerEvents.REMOTE_LIKE,
  TrackPlayerEvents.REMOTE_PAUSE,
  TrackPlayerEvents.REMOTE_PLAY,
  TrackPlayerEvents.REMOTE_PLAY_ID,
  TrackPlayerEvents.REMOTE_PLAY_SEARCH,
  TrackPlayerEvents.REMOTE_PREVIOUS,
  TrackPlayerEvents.REMOTE_SEEK,
  TrackPlayerEvents.REMOTE_SET_RATING,
  TrackPlayerEvents.REMOTE_SKIP,
  TrackPlayerEvents.REMOTE_STOP,
];

let currentState, currentSong, currentSongIndex;

const lineSuparator = () => {
  return <View style={styles.lineSuparator} />;
};

const ListComponet = () => {
  const [data, setData] = React.useContext(DataApi);
  const [currentsongData, setCurrentSongData] = React.useContext(
    CurrentSongData,
  );
  const [track, setTrack] = React.useContext(TrackList);
  const [isPlaying, setIsPlaying] = React.useState(false);
  //TODO there is something todo

  const changeUiPlay = () => { };

  const changeUiPause = () => { };
  const changeUiStop = () => { };

  useTrackPlayerEvents(events, (e) => {
    TrackPlayer.getState().then((state) => {
      console.log('State => ', state);
      if (state === 3) {
        TrackPlayer.getCurrentTrack().then((current) => {
          TrackPlayer.getTrack(current).then((res) => {
            console.log('track => ', res);
            setTrack(res);
            setIsPlaying(true);
          });
        });
      }
      if (state === 2) {
        setIsPlaying(false);
      }
      if (state === 1) {
        setIsPlaying(false);
        ToastAndroid.showWithGravity(
          'PlayBack In List Have Completed...',
          5000,
          ToastAndroid.CENTER,
        );
        TrackPlayer.stop();
      }
    });

    // switch (e.type) {
    //   case TrackPlayerEvents.PLAYBACK_ERROR:
    //     console.log('PlayBack State Error');
    //     break;

    //   case TrackPlayerEvents.PLAYBACK_STATE:
    //     console.log('PlayBack State SuccusFull');
    //     break;

    //   case TrackPlayerEvents.PLAYBACK_QUEUE_ENDED:
    //     console.log('PlayBack Queue Ended');
    //     break;

    //   case TrackPlayerEvents.PLAYBACK_TRACK_CHANGED:
    // console.log('PlayBack Track Changed');
    //     console.log('Change here.........................................');
    //     break;

    //   case TrackPlayerEvents.REMOTE_BOOKMARK:
    //     console.log('Remote Bookmarks');
    //     break;

    //   case TrackPlayerEvents.REMOTE_DISLIKE:
    //     console.log('Remote Dislike');
    //     break;

    //   case TrackPlayerEvents.REMOTE_DUCK:
    //     console.log('Remote Duck');
    //     break;

    //   case TrackPlayerEvents.REMOTE_JUMP_BACKWARD:
    //     console.log('Remote Jump Backward');
    //     break;

    //   case TrackPlayerEvents.REMOTE_JUMP_FORWARD:
    //     console.log('Remote Jump forward');
    //     break;

    //   case TrackPlayerEvents.REMOTE_LIKE:
    //     console.log('Remote Like');
    //     break;

    //   case TrackPlayerEvents.REMOTE_PAUSE:
    //     console.log('Remote Pause');
    //     break;

    //   case TrackPlayerEvents.REMOTE_PLAY:
    //     console.log('Remote play');
    //     break;

    //   case TrackPlayerEvents.REMOTE_PLAY_ID:
    //     console.log('Remote Play id');
    //     break;

    //   case TrackPlayerEvents.REMOTE_PLAY_SEARCH:
    //     console.log('Remote Play search');
    //     break;

    //   case TrackPlayerEvents.REMOTE_PREVIOUS:
    //     console.log('Remote Previous');
    //     break;

    //   case TrackPlayerEvents.REMOTE_SEEK:
    //     console.log('Remote Seek');
    //     break;

    //   case TrackPlayerEvents.REMOTE_SET_RATING:
    //     console.log('Remote Set Rating');
    //     break;

    //   case TrackPlayerEvents.REMOTE_SKIP:
    //     console.log('Remote Skip');
    //     break;

    //   case TrackPlayerEvents.REMOTE_STOP:
    //     console.log('Remote Stop');
    //     break;

    //   default:
    //     break;
    // }

    // switch (e.state) {
    //   case 0:
    //     console.log('Stop');

    //     break;
    //   case 1:
    //     console.log('one');
    //     break;
    //   case 2:
    //     console.log('Pause');

    //     break;
    //   case 3:
    //     console.log('playing');
    //     break;
    //   case 4:
    //     console.log('four');
    //     break;
    //   case 5:
    //     console.log('five');
    //     break;

    //   case 6:
    //     console.log('buffering');
    //     break;

    //   case 7:
    //     console.log('seven');
    //     break;

    //   case 8:
    //     console.log('eight');
    //     break;
    //   case 9:
    //     console.log('nine');
    //     break;
    //   default:
    //     console.log('default');
    //     break;
    // }

    /**
     * 086321
     */
    // if (STATE_NONE) {
    //   console.log('none =>', e.state);
    // }
    // if (STATE_READY) {
    //   console.log('Ready =>', e.state);
    // }
    // if (STATE_BUFFERING) {
    //   console.log('Buffering =>', e.state);
    // }
    // if (STATE_PLAYING) {
    //   console.log('Playing =>', e.state);
    // }
    // if (STATE_PAUSED) {
    //   console.log('Paused =>', e.state);
    // }
    // if (STATE_STOPPED) {
    //   console.log('Stopped =>', e.state);
    // }
  });

  const renderComponents = ({
    item,
    index,
    album,
    artist,
    comment,
    duration,
    encoder,
    height,
    thumb,
    title,
    width,
  }) => {
    if (item.path) {
      MediaMeta.get(item.path)
        .then((metadata) => {
          album = metadata.album;
          artist = metadata.artist;
          comment = metadata.comment;
          duration = metadata.duration;
          encoder = metadata.encoder;
          height = metadata.height;
          thumb = metadata.thumb;
          title = metadata.title;
          width = metadata.width;
        })
        .catch((err) => console.error(err));
    }

    return (
      <TouchableOpacity
        onPress={() => {
          // console.log('album : ', album);
          // console.log('artist : ', artist);
          // console.log('comment :', comment);
          // console.log('duration :', duration);
          // console.log('encoder :', encoder);
          // console.log('height :', height);
          // console.log('thumb :', thumb);
          // console.log('title :', title);
          // console.log('width :', width);

          // item.iconsChange
          !isPlaying
            ? PlayerController(
              item,
              index,
              'play',
              'play',
              data,
              setData,
              currentsongData,
              setCurrentSongData,
              track,
              setTrack,
            )
            : PlayerController(
              item,
              index,
              'pause',
              'pause',
              data,
              setData,
              currentsongData,
              setCurrentSongData,
              track,
              setTrack,
            );
        }}
        style={[
          styles.innerContainer,
          // { backgroundColor: item.changeBackGround ? '#cedbf1' : null },
          {
            backgroundColor:
              track != null && track.id === index.toString() ? '#cedbf1' : null,
          },
        ]}>
        <View style={styles.dirContainer}>
          <View style={styles.nameContainer}>
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {item.name}
              </Text>
            </View>
            <View style={styles.autherContainer}>
              <Text numberOfLines={1} style={styles.auther}>
                {item.path}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.three}
            onPress={() =>
              // item.iconsChange
              !isPlaying
                ? PlayerController(
                  item,
                  index,
                  'play',
                  'play',
                  data,
                  setData,
                  currentsongData,
                  setCurrentSongData,
                  track,
                  setTrack,
                )
                : PlayerController(
                  item,
                  index,
                  'pause',
                  'pause',
                  data,
                  setData,
                  currentsongData,
                  setCurrentSongData,
                  track,
                  setTrack,
                )
            }>
            <Neomorph
              inner // <- enable shadow inside of Neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                ...styles.icon,
                width: 50,
                height: 50,
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DEE9F7',
              }}>
              {/* <SongIcon name={item.iconsChange ? 'play' : 'pause'} size={20} /> */}
              <SongIcon
                name={
                  track != null && track.id === index.toString() && isPlaying
                    ? 'pause'
                    : 'play'
                }
                size={20}
              />
            </Neomorph>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  //TODO

  // console.table(data);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderComponents}
        keyExtractor={(item, index) => index.toString()}
        // ItemSeparatorComponent={lineSuparator}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // pagingEnabled={true}
        bounces={false}
        decelerationRate="fast"
        scrollEventThrottle={5}
      // refreshControl
      // onRefresh
      // refreshing
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(224,44,42,0.4)',
  },
  innerContainer: {
    display: 'flex',
    flex: 1,
    height: 60,
    width: dimension.width,
    alignItems: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dirContainer: {
    display: 'flex',
    flex: 0.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  lineSuparator: {
    backgroundColor: 'gray',
    height: 0.4,
    width: dimension.width - 30,
    alignSelf: 'center',
  },
  icon: {
    shadowRadius: 6,
    borderRadius: 25,
  },
  nameContainer: {
    width: dimension.width / 2,
    height: 60,
    overflow: 'hidden',
  },
  titleContainer: {
    height: 30,
    overflow: 'hidden',
  },
  autherContainer: {
    height: 30,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  auther: {
    fontSize: 16,
    fontWeight: '100',
    color: '#A2B1CA',
  },
});

export default ListComponet;
