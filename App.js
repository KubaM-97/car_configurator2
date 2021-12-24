import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Provider } from 'react-redux';
import { Store } from './redux/store'

import Main from "~/components/configurator/Main"
import FinalPanel from "~/components/configurator/final/FinalPanel"
import Nav from "~/components/global/Nav"

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
        <ImageBackground source={Background} style={styles.imgBackground}>
          <SafeAreaView style={styles.container}>
            <Nav />
            <View style={styles.xxx}>
              <StatusBar style="auto" />
              <Main  />
            </View>
            <FinalPanel  />
          </SafeAreaView>
        </ImageBackground>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    // marginTop: StatusBar.currentHeight,
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
