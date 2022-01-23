import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import i18n from 'react-native-i18n';
import { useSelector } from 'react-redux'

import SettingsButton from "~/components/settings/SettingsButton"
import SettingsPanel from "~/components/settings/SettingsPanel"

export default function Settings() {
    const { ourLanguage } = useSelector(state => state.userReducer);
    i18n.locale = ourLanguage;

    const settingsPanelRef = useRef(null);

    return (
        <View>
            <SettingsButton settingsPanelRef={settingsPanelRef.current} />
            <SettingsPanel ref={settingsPanelRef} />
        </View>
    );
}
