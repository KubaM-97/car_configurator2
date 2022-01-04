import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function SettingsButton(props) {

    const { onShowSettingsPanel } = props;
    
    return (
        <View style={styles.settingsButton}>
            <Ionicons color='lightblue' name="settings-outline" size={28}
                onPress={()=>onShowSettingsPanel()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        paddingRight: 40
    }
});
