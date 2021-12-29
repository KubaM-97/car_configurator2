import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text } from 'react-native';
// import './lang/i18n'; 
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


import { Provider } from 'react-redux';
import { Store } from './redux/store'

import Main from "~/components/configurator/Main"
import FinalPanel from "~/components/configurator/final/FinalPanel"
import { Ionicons } from '@expo/vector-icons';

const Background = require("~/assets/images/background.jpg")

export default function App() {

  let [fontsLoaded] = useFonts({
    'Goldman-Regular':require('~/assets/fonts/Goldman-Regular.ttf'),
  });

  if (!fontsLoaded) return  (
    <Provider store={Store}>
      <AppLoading />
    </Provider>
  );
  else {
    return (
      <Provider store={Store}>
        {/* <I18nextProvider i18n={i18next}> */}
          <ImageBackground source={Background} style={styles.imgBackground}>
            <Text>xxxxxxxxxxxxxxxxxx </Text>
            <SafeAreaView style={styles.container}>
                <Ionicons name="settings-outline" size={24} color="white"/>

              <View style={styles.xxx}>
                <StatusBar style="auto" />
                <Main  />
              </View>
              <FinalPanel  />
            </SafeAreaView>
          </ImageBackground>
        {/* </I18nextProvider> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  xxx: {
    shadowColor: 'rgb(149, 184, 250)',
    shadowRadius: 140,
    shadowOffset: {width: 20, height: 20},
    shadowOpacity: 0.75,
    elevation: 8,
    height: 500,
    width: '90%',
    alignItems: 'center',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
  },
});
