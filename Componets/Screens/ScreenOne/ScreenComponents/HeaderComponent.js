/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import BackIcon from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/Feather';

//! TODO add Check


const Header = ({ check }) => {
  return (
    <View style={styles.mainContainer}>
      {check ? (
        <View style={{
          ...styles.one,
          width: 50,
          height: 50,
          display: 'flex',
        }} />
      ) : (
          <TouchableOpacity style={styles.one}>
            <Neomorph
              inner // <- enable shadow inside of Neomorph
              swapShadows // <- change zIndex of each shadow color
              // eslint-disable-next-line react-native/no-inline-styles
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
              <BackIcon name="arrow-back" size={20} color="#A2B1CA" />
            </Neomorph>
          </TouchableOpacity>
        )}
      <View style={styles.two}>
        <Text>One</Text>
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
          <MenuIcon name="menu" size={20} color="#A2B1CA" />
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
  one: {
    padding: 4,
  },
  two: {},
  three: {},
  icon: {
    shadowRadius: 6,
    borderRadius: 25,
  },
});

export default Header;
