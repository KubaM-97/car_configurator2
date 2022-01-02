import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Text, Modal } from 'react-native';
import I18n from './lang/i18n';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Provider } from 'react-redux';
import { Store } from './redux/store'

import Main from "~/components/configurator/Main"
import FinalPanel from "~/components/configurator/final/FinalPanel"
import Nav from "~/components/global/Nav"

// import Navigator from '~/routes/homeStack'
const Background = require("~/assets/images/background.jpg")

export default function App() {
  onBackButtonPress = ()=>console.log('ppp') 
  // onPress: () => {
  //   //     I18n.locale = 'fr-Us';
  //   //     this.setState({changeLanguage: 'English'});
  //   //   },
  // onPress={pressHandler}
  const pressHandler = () => {
    // props.navigation.navigate('ReviewDetails')
    // props.navigation.navigate('ReviewDetails', {name: 'Dupa', age: 24)
    props.navigation.push('ReviewDetails')
    // props.navigation.goBack()

    // props.navigation.getParam('name')
  }
  let [fontsLoaded] = useFonts({
    'Goldman-Regular':require('~/assets/fonts/Goldman-Regular.ttf'),
  });

  const [xxx, setXXX] = useState(true)
  const zzz = () => {
    console.log('pppppppsdsdfsdfsdfsdsdf2cipcipdupduopdpudupdupdidadudaz');
    setXXX(false)
  }
  
  if (!fontsLoaded) return  (
    <Provider store={Store}>
      <AppLoading />
    </Provider>
  );
  else {
    return (
      <Provider store={Store}>
        {/* <Modal visible={xxx} onRequestClose={zzz}>
          <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>fffffffffffffffffffffFFFFFFFFFFFFFFFFFFffffffffffffffffffff</Text>
          </View>
        </Modal> */}
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
    width: '100%',
    // marginTop: StatusBar.currentHeight,
    marginTop: 20,
    position: 'relative'
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
