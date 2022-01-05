import React, { useState } from 'react';
import { View } from 'react-native';
import i18n from 'react-native-i18n';
import { useSelector } from 'react-redux'

import SettingsButton from "~/components/settings/SettingsButton"
import SettingsPanel from "~/components/settings/SettingsPanel"

export default function Settings() {
    const { ourLanguage } = useSelector(state => state.userReducer);
    i18n.locale = ourLanguage;

    const [ isSettingsPanelVisible, setShowSettingsPanel ] = useState(false);
    
    const onShowSettingsPanel = () => {setShowSettingsPanel(true)}
    const onHideShowSettingsPanel = () => {setShowSettingsPanel(false)}

    return (
        <View>
            <SettingsButton onShowSettingsPanel={onShowSettingsPanel}/>
            <SettingsPanel isSettingsPanelVisible={isSettingsPanelVisible} onHideShowSettingsPanel={onHideShowSettingsPanel}/>
        </View>
    );
}
