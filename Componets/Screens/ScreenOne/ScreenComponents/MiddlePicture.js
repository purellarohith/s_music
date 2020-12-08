import React from 'react';
import {
  Easing,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

let dimensions = Dimensions.get('window');

const MiddlePicture = () => {
  let anime = React.useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(anime, {
      toValue: 1,
      duration: 60000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  let viewRotate = anime.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: viewRotate,
          },
        ],
      }}>
      <TouchableOpacity style={{}}>
        <Neomorph
          inner // <- enable shadow inside of Neomorph
          swapShadows // <- change zIndex of each shadow color
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: dimensions.width / 2,
            height: dimensions.width / 2,
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DEE9F7',
            shadowRadius: 6,
            borderRadius: dimensions.width / 2 / 2,
          }}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              width: dimensions.width / 2,
              height: dimensions.width / 2,
            }}
            resizeMode="cover"
            style={{ borderRadius: dimensions.width / 2 / 2 }}
          />
        </Neomorph>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default MiddlePicture;
