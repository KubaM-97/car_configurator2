import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Select from '~/components/global/Select';
import { globalStyles } from '~/assets/style'
import I18n from '~/lang/i18n';

const flagPL = require('~/assets/images/flags/PL.gif');
const flagEN = require('~/assets/images/flags/EN.gif');
const flagJPN = require('~/assets/images/flags/JPN.gif');

function Flag(props){
    const { lang } = props;
    
    const flagImages = {
        PL: flagPL,
        EN: flagEN,
        JPN: flagJPN,
    }

    return (
        <View style={styles.flag}>
            <Text style={[globalStyles.text, styles.text]}>{lang}</Text>
            <Image 
                source={flagImages[lang]}
                style={styles.flagImage}
             />
        </View>
    )
}
export default function Languages() {
    
    const selectTitle = {
        title: I18n.t('selectLanguage'),
        icon: <Ionicons name="language-outline" color='white' size={24} />
    }

    const languages = [];
    const countries = ["PL", "EN", "JPN"];

    countries.map(lang => languages.push({text: <Flag lang={lang} />, value: lang}));

    return (
        <View>
            <Select {...selectTitle} options={languages}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flag: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250
    },
    flagImage: {
        marginLeft: 25,
        width: 35,
        height: 25,

    },
    text: {
        color: 'blue',
        fontSize: 14
    }
})