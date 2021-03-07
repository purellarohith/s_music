import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './ScreenComponents/HeaderComponent';
import ListComponet from './ScreenComponents/ListComponent';
import MiddleComponent from './ScreenComponents/MiddleComponent';

const ScreenOne = () => {
  
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.safe}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.middle}>
            <MiddleComponent />
          </View>
          <View style={styles.list}>
            <ListComponet />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    display: 'flex',
  },
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#DEE9F7',
    // backgroundColor: 'rgba(225,151,125,0.5)',
  },
  header: {
    flex: 0.1,
    display: 'flex',
    // backgroundColor: 'rgba(225,151,1,0.5)',
  },
  middle: {
    flex: 0.4,
    display: 'flex',
    // backgroundColor: 'rgba(225,11,125,0.5)',
  },
  list: {
    flex: 0.5,
    display: 'flex',
    // backgroundColor: 'rgba(5,151,125,0.5)',
  },
});

export default ScreenOne;
