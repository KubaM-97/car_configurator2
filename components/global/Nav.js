import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layer from "~/components/global/Layer"
import NavButton from "~/components/navigation/NavButton"
import Settings from "~/components/settings/Settings"

export default function Nav() {
    
    return (
        <View style={styles.navWrapper}>
            <View style={styles.navContent}>
                <Layer />
                <NavButton />
                <Settings />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navWrapper: {
        position: 'absolute',
        top: 0,
        width: '105%',
    },
    navContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    }
});
