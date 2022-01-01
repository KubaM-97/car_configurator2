import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SettingsButton(props) {

    const { onSetShowSettingsPanel } = props;
    
    return (
        <View style={styles.settingsButton}>
            <Ionicons color='lightblue' name="settings-outline" size={28}
                onPress={()=>onSetShowSettingsPanel() }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        paddingRight: 20
    }
});
