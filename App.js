import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text, NativeModules } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Provider } from 'react-redux';
import { Store } from './redux/store'

import LanguageProvider from "~/components/global/LanguageProvider"

import Main from "~/components/configurator/Main"
import FinalPanel from "~/components/configurator/final/FinalPanel"
import Nav from "~/components/global/Nav"

const Background = require("~/assets/images/background.jpg")
const { StatusBarManager } = NativeModules;

export default function AppWrapper  () {

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
        {/* <LanguageProvider /> */} 
          <ImageBackground source={Background} style={styles.imgBackground}>
            <SafeAreaView style={styles.container}>
              <Nav />
              <View style={styles.xxx}>
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
    // width: '100%',
    position: 'relative'
  },
  xxx: {
    shadowColor: 'rgb(149, 184, 250)',
    shadowRadius: 10,
    shadowOpacity: 0.75,
    elevation: 8,
    height: 500,
    width: '90%',
    alignItems: 'center',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    marginTop: StatusBarManager.HEIGHT,
  },
});
