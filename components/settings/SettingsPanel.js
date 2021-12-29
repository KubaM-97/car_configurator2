import React, {useState} from 'react';
import { StyleSheet, View, Modal, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Select, { SelectItem } from '@redmin_delishaj/react-native-select';

function Flag(props){
    const { lang } = props;
    // react native doesnt support require dynamic paths... :(

    const flagImages = {
        PL: require('~/assets/images/flags/PL.gif'),
        EN: require('~/assets/images/flags/EN.gif'),
        JPN: require('~/assets/images/flags/JPN.gif'),
    }
    return (
        <View style={{backgroundColor: 'orange', width: 100}}>
            <Text>{lang}</Text>
            <Image 
                source={flagImages[lang]}
                style={styles.flag}
             />
        </View>
    )
}
export default function SettingsPanel(props) {
    const languages = [];
    const countries = ["PL", "EN", "JPN"];
    countries.map(lang => languages.push({text: <Flag lang={lang} style={{width: '100%'}}/>, value: lang}))
    const [selectedItem, setSelectedItem] = useState();
    const config = {
        fontSize: 18,
        // backgroundColor: '#404040',
        backgroundColor: 'green',
        textColor: 'white',
        selectedBackgroundColor: 'white',
        selectedTextColor: 'white',
        selectedFontWeight: 'bold',
      }
      const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (

        <Modal transparent={true}  animationType="slide" >
            
        <Text  onPress={() => props.setShowSettingsPanel('false')} style={{color: 'white'}}>xxx {props.showSettingsPanel} yyy</Text>
        {/* <Text  onPress={createThreeButtonAlert}  style={{color: 'white'}}>xxx {props.showSettingsPanel} yyy</Text> */}
        {/* <TouchableWithoutFeedback onPress={() => alert('Pressed!')}> */}
        <View style={styles.settingsPanel}>
            <Select 
            // onPress={() => alert('Pressed!')}
            onPress={createThreeButtonAlert} 
                data={languages}
                onSelect={value => setSelectedItem(value)}
                value={selectedItem}
                placeholder='dupa'
                // style={styles.select}
                config={config}
                />
        </View>
         {/* </TouchableWithoutFeedback> */}
        </Modal>
    );
}

const styles = StyleSheet.create({
    settingsPanel: {
        position: 'absolute',
        top: '10%',
        left: '5%',
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        width: '90%',
        height: '80%',
        backgroundColor: 'black',
        opacity: .7,
    },
    flag: {
        width: 20, 
        height: 20, 
        marginLeft: 10, 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignSelf: 'center'
    },
    select: {
        backgroundColor: 'red'
    }
});
