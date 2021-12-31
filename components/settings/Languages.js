import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Select from '~/components/global/Select';
import { globalStyles } from '~/assets/style'
import I18n from '~/lang/i18n';

import { useDispatch } from 'react-redux'
import { setLanguage } from '~/redux/actions'

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
            <Text style={[globalStyles.text, styles.text]}>{lang.toUpperCase()}</Text>
            <Image 
                source={flagImages[lang.toUpperCase()]}
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
    const countries = ["pl", "en", "jpn"];

    countries.map(lang => languages.push({text: <Flag lang={lang} />, value: lang}));

    const dispatch = useDispatch();

    const selectLanguage = (lang) => {
        dispatch(setLanguage(lang))
    } 
    return (
        <View style={{width: '90%'}}>
            <Select {...selectTitle} options={languages} onSelect={lang => selectLanguage(lang)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flag: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // width: 250,
        // width: '20%',
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