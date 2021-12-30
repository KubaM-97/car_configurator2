import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { globalStyles } from '~/assets/style'
import uuid from 'react-native-uuid'
export default function Select(props) {
    const { title, icon, options } = props;
    const [ expand, setExpand ] = useState(false);
    
    const selectOptions = options.map( option => 
        <View key={uuid.v4()} onPress={()=>setExpand(true)} style={{...styles.select}}>
            <Text>{option.text}</Text>
        </View>
    );

    return (
        <View>
            <View style={styles.select}>
                <Text onPress={()=>setExpand(true)} style={[globalStyles.text, styles.selectText]}>{title} {icon} {expand}</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>setExpand(false)}>
                <View>
                    {expand ? selectOptions : null }
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: 'black'
    },
    selectText: {
        color: 'white',
        fontSize: 18,
    }
})