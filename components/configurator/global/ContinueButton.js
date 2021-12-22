import React from 'react';
import { TouchableOpacity, Pressable, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { globalStyles } from '~/assets/style';
import { setCurrentStep } from '~/redux/actions'

export default function ContinueButton() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.userReducer);

  return (
      <TouchableOpacity style={[globalStyles.button, styles.button]}>
          <Pressable onPress={()=>dispatch(setCurrentStep(currentStep+1))}>
              <Text style={globalStyles.text}>Continue!!!</Text>
          </Pressable>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginTop: 0,
    marginBottom: 40,
    alignSelf: 'center'
  }
})
