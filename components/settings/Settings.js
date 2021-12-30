import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import SettingsButton from "~/components/settings/SettingsButton"
import SettingsPanel from "~/components/settings/SettingsPanel"

export default function Settings(props) {

    const [ showSettingsPanel, setShowSettingsPanel ] = useState(false);
    
    return (
        <View style={styles.settingsButton}>
            <SettingsButton onSetShowSettingsPanel={() => setShowSettingsPanel(true)}/>
            { showSettingsPanel ? <SettingsPanel showSettingsPanel={showSettingsPanel} setShowSettingsPanel={()=>setShowSettingsPanel(false)}/> : null }
            {/* <SettingsPanel style={{display: showSettingsPanel ? 'block' : 'none'}} showSettingsPanel={showSettingsPanel} setShowSettingsPanel={setShowSettingsPanel}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    settingsButton: {
        // width: '100%',
        // height: '100%',
        // marginTop: 30,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
});
