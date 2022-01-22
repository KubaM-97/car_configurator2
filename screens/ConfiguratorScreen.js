import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text, NativeModules } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Provider } from 'react-redux';
import { Store } from '~/redux/store'

import LanguageProvider from "~/components/global/LanguageProvider"

import Main from "~/components/configurator/Main"
import FinalPanel from "~/components/configurator/final/FinalPanel"
import Nav from "~/components/global/Nav"

const Background = require("~/assets/images/background.jpg")
const { StatusBarManager } = NativeModules;

export default function ConfiguratorScreen  () {

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
                <Main  />
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
  imgBackground: {
    flex: 1,
    width: '100%',
    marginTop: StatusBarManager.HEIGHT,
  },
});
