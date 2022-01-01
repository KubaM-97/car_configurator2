import React from 'react'
import { View, StyleSheet } from 'react-native';
import {BoxShadow} from 'react-native-shadow'

const shadowOpt = {
	width:100,
	height:100,
	color:"#000",
	border:2,
	radius:3,
	opacity:0.2,
	x:0,
	y:3,
	style:{marginVertical:5}
}

       
export default function Layer() {
    return (
      
              <View style={styles.layer} />

    )
}

const styles = StyleSheet.create({
    layer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: 'lightblue',
        opacity: .6,
    },
});
