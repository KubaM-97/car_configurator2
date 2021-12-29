import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

import Layer from "~/components/global/Layer"
// import Hamburger from "~/components/settings/Hamburger"
import Settings from "~/components/settings/Settings"
import SettingsPanel from "~/components/settings/SettingsPanel"

export default function Nav() {

    return (
        <View style={styles.nav}>
            <Layer />
            <Text style={{color: 'white'}}>
                Hamburger
            </Text>
            {/* <Hamburger /> */}
            <Settings />
            {/* <SettingsPanel /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: 10,
        alignItems: 'center',
        width: '100%',
        height: 60,

        // width: Dimensions.width,
        // height: 10,
    }
});
