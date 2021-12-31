import React, {useState} from 'react';
import { StyleSheet, View, Modal, Text, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import Languages from './Languages';


export default function SettingsPanel(props) {
    const { showSettingsPanel, setShowSettingsPanel } = props; 
    
    return (

        <Modal transparent={true} visible={showSettingsPanel} animationType="slide"
        //  onRequestClose={()=>{console.log('opopo');}}
          >
            <TouchableWithoutFeedback onPress={() => setShowSettingsPanel(false)} style={{width: '100%', height: '100%'}}>
                <View style={styles.settingsPanel}>
                    <Languages />
                </View>
            </TouchableWithoutFeedback>
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
