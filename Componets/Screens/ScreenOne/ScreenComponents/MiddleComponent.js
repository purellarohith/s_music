import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import MiddlePicture from './MiddlePicture';
import LikeIcon from 'react-native-vector-icons/AntDesign';
import DetailsIcon from 'react-native-vector-icons/Entypo';

const MiddleComponent = () => {
  return (
    <View style={styles.mainContainer}>
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
          <LikeIcon name="heart" size={20} color="#A2B1CA" />
        </Neomorph>
      </TouchableOpacity>
      <View>
        <MiddlePicture />
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
          <DetailsIcon name="dots-three-horizontal" size={20} color="#A2B1CA" />
        </Neomorph>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    shadowRadius: 6,
    borderRadius: 25,
  },
});

export default MiddleComponent;
