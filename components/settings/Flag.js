import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { globalStyles } from '~/assets/style'

const flagPL = require('~/assets/images/flags/PL.gif');
const flagEN = require('~/assets/images/flags/EN.gif');
const flagJPN = require('~/assets/images/flags/JPN.gif');

export default function Flag(props){
    const { lang } = props;
    
    const flagImages = {
        PL: flagPL,
        EN: flagEN,
        JPN: flagJPN,
    } 

    return (
        <View style={styles.flag}>
            <Text style={[globalStyles.text, styles.text]}>{lang.toUpperCase()}</Text>
            <Image 
                source={flagImages[lang.toUpperCase()]}
                style={styles.flagImage}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    flag: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    flagImage: {
        marginLeft: 25,
        width: 35,
        height: 25,
    },
    text: {
        fontSize: 14
    }
})