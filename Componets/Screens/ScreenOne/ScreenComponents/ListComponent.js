import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import SongIcon from 'react-native-vector-icons/Foundation';
import { DataApi } from '../../../Context/Context';
import MediaMeta from 'react-native-media-meta';

let dimension = Dimensions.get('window');

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
        console.log(album);
        console.log(artist);
        console.log(comment);
        console.log(duration);
        console.log(encoder);
        console.log(height);
        console.log(thumb);
        console.log(title);
        console.log(width);
      }}
      style={styles.innerContainer}>
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
        <TouchableOpacity style={styles.three}>
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
            <SongIcon name={item.iconsChange ? 'play' : 'pause'} size={20} />
          </Neomorph>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const lineSuparator = () => {
  return <View style={styles.lineSuparator} />;
};

const ListComponet = () => {
  const [data, setData] = React.useContext(DataApi);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={renderComponents}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={lineSuparator}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // pagingEnabled={true}
        bounces={false}
        decelerationRate="fast"
        scrollEventThrottle={5}
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
    // backgroundColor: 'red',
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
