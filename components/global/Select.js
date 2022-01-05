import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { globalStyles } from '~/assets/style'
import uuid from 'react-native-uuid'


export default function Select(props) {
    const { title, icon, options, onSelect } = props;
    const [ areSelectOptionsVisible, setSelectOptionsVisible ] = useState(false);

    // const toggleSetSelectOptionsVisible = setSelectOptionsVisible(!areSelectOptionsVisible);

    const selectOptions = options.map( option => 
        <TouchableWithoutFeedback key={uuid.v4()} onPress={()=>{setSelectOptionsVisible(false); onSelect(option.value);}}>
            <View style={styles.select}>
                <Text>{option.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    return (
        <View>
            <View style={styles.select}>
                <Text onPress={()=>setSelectOptionsVisible(true)} style={[globalStyles.text, styles.selectText]}>{title} {icon}</Text>
            </View>
            {areSelectOptionsVisible ? selectOptions : null }
        </View>
    )
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 65,
        paddingVertical: 10,
        borderWidth: 2,
        width: '100%',
    },
    selectText: {
        color: 'white',
        fontSize: 18,
    },
})