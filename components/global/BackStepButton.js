import React from 'react';
import { TouchableOpacity, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep } from '~/redux/actions';

export default function ContinueButton() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.userReducer);

  return (
    <TouchableOpacity style={styles.button}>
        <Pressable onPress={()=>dispatch(setCurrentStep(currentStep-1))}>
            <Ionicons name="arrow-back" size={30} color="lightblue"/>
        </Pressable>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute', 
    top: 5,
    left: -20,
  },
})
