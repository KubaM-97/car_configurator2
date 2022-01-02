import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function NavButton() {

    const navigationDrawer = () => {
        console.log('navigation');
    }
    
    return (
        <View style={styles.settingsButton}>
            <Ionicons color='lightblue' name="menu-outline" size={28} onPress={navigationDrawer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        paddingLeft: 40
    }
});