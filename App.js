/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import ScreenOne from './Componets/Screens/ScreenOne/ScreenOne';
import ScreenTwo from './Componets/Screens/ScreenTwo/ScreenTwo';
import { ContextApi, DataApi } from './Componets/Context/Context';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {

    setTimeout(() => setLoading(false), 500);

  }, []);


  enableScreens();
  const Stack = createNativeStackNavigator();
  return (
    <>
      <ContextApi>
        {loading ? (
          <View>
            <Text>Loading.....</Text>
          </View>
        ) : (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen
                  name="MainScreen"
                  component={ScreenOne}
                  options={{
                    headerShown: false,
                    statusBarHidden: true,
                  }}
                />
                <Stack.Screen
                  name="PlayerScreen"
                  component={ScreenTwo}
                  options={{
                    headerShown: false,
                    statusBarHidden: true,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )}
      </ContextApi>
    </>
  );
};

export default App;
