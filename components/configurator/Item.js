import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedItems } from '~/redux/actions'


export default function Item(props) {
    const { item } = props;
    const { img, name, price } = item;
    const dispatch = useDispatch()
    const { selectedItems } = useSelector(state => state.userReducer);
    const isSelected = selectedItems.some(el => el.category === item.category && el.name === item.name )
    return (
        <TouchableOpacity style={styles.button}>
            <Pressable onPress={() => dispatch(setSelectedItems(item))}>
                <View style={[{...styles.item, backgroundColor: isSelected ? 'red' : 'green'}]}>
                    <Image source={img} size={24} style={{height: '90%', marginRight: 10}}/>
                    <View>
                        <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>{name}</Text>
                        <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>{price} euro</Text>
                    </View>
                </View>
            </Pressable>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    item: {
        backgroundColor: true ? 'lightblue' : 'green',
        padding: 10,
        marginVertical: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center', 
    },
})
