import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import Languages from './Languages';


export default SettingsPanel = forwardRef((props, ref) => {
    // const { isSettingsPanelVisible, onHideSettingsPanel } = props; 
    const [isSettingsPanelVisible, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
      alterToggle() {
        setToggle(true);
      },
    }));

    return (
        <Modal transparent={true} visible={isSettingsPanelVisible} animationType="slide" onRequestClose={()=>setToggle(false)}>
            <View style={styles.settingsPanel}>
                <Languages/>
            </View>
        </Modal>
    );
})

const styles = StyleSheet.create({
    settingsPanel: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 100,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: .7,
    },
    flag: {
        width: 20, 
        height: 20, 
        marginLeft: 10, 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignSelf: 'center'
    },
    select: {
        backgroundColor: 'red'
    }
});
