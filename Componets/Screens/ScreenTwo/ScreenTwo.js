import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from '../ScreenOne/ScreenComponents/HeaderComponent';
import MiddleComponent from '../ScreenOne/ScreenComponents/MiddleComponent';
import NavigationButtons from './ScreentwoComponents/NavigationButtons';
import ProgressBars from './ScreentwoComponents/ProgressBar';

const ScreenTwo = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.safe}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.middleContainer}>
            <MiddleComponent />
          </View>
          <View style={styles.dataContainer}>
            <Text>data</Text>
            <Text>data</Text>
          </View>
          <View style={styles.progressbarContainer}>
            <ProgressBars />
          </View>
          <View style={styles.controlsContainer}>
            <NavigationButtons type={'back'} />
            <NavigationButtons type={'play'} />
            <NavigationButtons type={'next'} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    display: 'flex',
    flex: 1,
  },
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#DEE9F7',
    // backgroundColor: 'rgba(225,151,125,0.5)',
  },
  header: {
    display: 'flex',
    flex: 0.1,
    // backgroundColor: 'rgba(225,11,5,0.5)',
  },
  middleContainer: {
    display: 'flex',
    flex: 0.4,
    // backgroundColor: 'rgba(25,161,25,0.5)',
  },
  dataContainer: {
    display: 'flex',
    flex: 0.2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'rgba(5,1,25,0.4)',
  },
  progressbarContainer: {
    display: 'flex',
    flex: 0.2,
    // backgroundColor: 'rgba(5,125,5,0.4)',
  },
  controlsContainer: {
    display: 'flex',
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    // backgroundColor: 'rgba(245,15,55,0.4)',
  },
});

export default ScreenTwo;
