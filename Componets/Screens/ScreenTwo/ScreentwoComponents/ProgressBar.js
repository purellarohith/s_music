import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

let dimension = Dimensions.get('window');
const ProgressBars = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.timebar}>
        <Text>0.12</Text>
        <Text>6.12</Text>
      </View>
      <Slider
        style={{ width: dimension.width - 20, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#DEE9F7"
        value={0.2}
        onValueChange={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timebar: {
    flex: 0.2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: dimension.width - 20,
  },
});
export default ProgressBars;
