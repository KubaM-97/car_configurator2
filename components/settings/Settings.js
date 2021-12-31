import React, { useState } from 'react';
import { View } from 'react-native';
import i18n from 'react-native-i18n';
import { useSelector } from 'react-redux'

import SettingsButton from "~/components/settings/SettingsButton"
import SettingsPanel from "~/components/settings/SettingsPanel"

export default function Settings() {

    const [ showSettingsPanel, setShowSettingsPanel ] = useState(false);

    const { ourLanguage } = useSelector(state => state.userReducer);
    i18n.locale = ourLanguage;

    return (
        <View>
            <SettingsButton onSetShowSettingsPanel={() => setShowSettingsPanel(true)}/>
            { showSettingsPanel ? <SettingsPanel showSettingsPanel={showSettingsPanel} setShowSettingsPanel={()=>setShowSettingsPanel(false)}/> : null }
        </View>
    );
}
