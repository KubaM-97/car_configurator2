import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { StyleSheet, SafeAreaView, View, ImageBackground, Text } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en'; 
// import '@formatjs/intl-pluralrules/polyfill'
// import '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
  })

export default function App() {
  const { t } = useTranslation();

  return (
    <View><Text>{t('Welcome to React')}</Text></View>
  );
}

// import React from 'react';
// import { StyleSheet, SafeAreaView, View, ImageBackground, Text } from 'react-native';
// // import './lang/i18n'; 
// import { StatusBar } from 'expo-status-bar';
// import AppLoading from 'expo-app-loading';
// import { useFonts } from 'expo-font';


// import { Provider } from 'react-redux';
// import { Store } from './redux/store'

// import Main from "~/components/configurator/Main"
// import FinalPanel from "~/components/configurator/final/FinalPanel"
// import { Ionicons } from '@expo/vector-icons';

// const Background = require("~/assets/images/background.jpg")


// // import * as RNLocalize from 'react-native-localize'
// // import i18n from 'i18n-js'
// // import memoize from 'lodash.memoize'

// // const translationGetters = {
// //   // en: () => require('./lang/en.json'),
// //   pl: () => require('./lang/pl.json')
// // }

// // const translate = memoize(
// //   (key, config) => i18n.t(key, config),
// //   (key, config) => (config ? key + JSON.stringify(config) : key)
// // )

// // const setI18nConfig = () => {
// //   const fallback = { languageTag: 'pl' }
// //   const { languageTag } =
// //     RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
// //     fallback
// //   translate.cache.clear()
// //   i18n.translations = { [languageTag]: translationGetters[languageTag]() }
// //   i18n.locale = languageTag
// // }

// // setI18nConfig()

// import {I18nextProvider} from "react-i18next";
// import i18next from "i18next";
// import {useTranslation} from "react-i18next";
// import common_de from "./lang/pl.json";
// // import common_en from "./lang/en.json";
// // i18next.init({
// //     interpolation: { escapeValue: false },  // React already does escaping
// // });
// export default function App() {

//   let [fontsLoaded] = useFonts({
//     'Goldman-Regular':require('~/assets/fonts/Goldman-Regular.ttf'),
//   });
//   const {t, i18n} = useTranslation('common');

//   i18next.init({
//     interpolation: { escapeValue: false },  // React already does escaping
//     lang: 'pl',                              // language to use
//     resources: {
//         en: {
//             // common: common_en               // 'common' is our custom namespace
//         },
//         pl: {
//             common: common_de
//         },
//     },
// });

//   if (!fontsLoaded) return  (
//     <Provider store={Store}>
//       <AppLoading />
//     </Provider>
//   );
//   else {
//     return (
//       <Provider store={Store}>
//         {/* <I18nextProvider i18n={i18next}> */}
//           <ImageBackground source={Background} style={styles.imgBackground}>
//             <Text>xxxxxxxxxxxxxxxxxx </Text>
//             <SafeAreaView style={styles.container}>
//                 <Ionicons name="settings-outline" size={24} color="white"/>

//               <View style={styles.xxx}>
//                 <StatusBar style="auto" />
//                 <Main  />
//               </View>
//               <FinalPanel  />
//             </SafeAreaView>
//           </ImageBackground>
//         {/* </I18nextProvider> */}
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%'
//   },
//   xxx: {
//     shadowColor: 'rgb(149, 184, 250)',
//     shadowRadius: 140,
//     shadowOffset: {width: 20, height: 20},
//     shadowOpacity: 0.75,
//     elevation: 8,
//     height: 500,
//     width: '90%',
//     alignItems: 'center',
//   },
//   imgBackground: {
//     flex: 1,
//     width: '100%',
//   },
// });
