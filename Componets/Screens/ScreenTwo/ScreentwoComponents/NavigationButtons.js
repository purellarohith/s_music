import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import SkipIcons from 'react-native-vector-icons/Ionicons';
import SongIcon from 'react-native-vector-icons/Foundation';

const NavigationButtons = ({ type }) => {
  return (
    <View>
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
          {type == 'play' ? (
            <SongIcon name={'play'} size={20} color={'#A2B1CA'} />
          ) : null}
          {type == 'back' ? (
            <SkipIcons name="play-back" size={20} color="#A2B1CA" />
          ) : null}
          {type == 'next' ? (
            <SkipIcons name="play-forward" size={20} color="#A2B1CA" />
          ) : null}
        </Neomorph>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    shadowRadius: 6,
    borderRadius: 25,
  },
});

export default NavigationButtons;
