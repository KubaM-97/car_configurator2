import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { globalStyles } from '~/assets/style'
import uuid from 'react-native-uuid'

export default function Select(props) {
    const { title, icon, options, onSelect } = props;
    const [ expand, setExpand ] = useState(false);

    const selectOptions = options.map( option => 
        <TouchableWithoutFeedback key={uuid.v4()} onPress={()=>{setExpand(false); onSelect(option.value);}}>
            <View style={styles.select}>
                <Text>{option.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <View>
            <View style={styles.select}>
                <Text onPress={()=>setExpand(true)} style={[globalStyles.text, styles.selectText]}>{title} {icon}</Text>
            </View>
            <View style={{width: '100%'}}>
                {expand ? selectOptions : null }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: 'black',
        width: '100%',
    },
    selectText: {
        color: 'white',
        fontSize: 18,
    }
})