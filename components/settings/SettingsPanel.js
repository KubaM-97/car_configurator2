import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';

import Languages from './Languages';


export default SettingsPanel = forwardRef((props, ref) => {

    const [isModalVisible, setModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      openModal() {
        setModalVisible(true);
      },
    }));

    return (
        <Modal transparent={true} visible={isModalVisible} animationType="slide" onRequestClose={()=>setModalVisible(false)}>
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
