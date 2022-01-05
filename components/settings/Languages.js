import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Select from '~/components/global/Select';
import Flag from '~/components/settings/Flag'

import I18n from '~/lang/i18n';

import { useDispatch } from 'react-redux'
import { setLanguage } from '~/redux/actions'

export default function Languages() {
    
    const selectTitle = {
        title: I18n.t('selectLanguage'),
        icon: <Ionicons name="language-outline" color='white' size={24} />
    }

    const languages = [];
    const countries = ["pl", "en", "jpn"];

    countries.map(lang => languages.push({text: <Flag lang={lang} />, value: lang}));

    const dispatch = useDispatch();
    const selectLanguage = lang => dispatch(setLanguage(lang))

    return (
        <View style={{width: '90%'}}>
            <Select {...selectTitle} options={languages} onSelect={lang => selectLanguage(lang)}/>
        </View>
    )
}
