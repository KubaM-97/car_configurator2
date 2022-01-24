import React from 'react';
import { TouchableHighlight, Pressable, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import I18n from '~/lang/i18n';

import { globalStyles } from '~/assets/style';
import { setCurrentStep } from '~/redux/actions'

export default function ContinueButton(props) {
  const { title } = props;
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.userReducer);

  return (
      <TouchableHighlight style={globalStyles.button}>
          <Pressable onPress={()=>dispatch(setCurrentStep(currentStep+1))}>
              <Text style={globalStyles.text}>{ title || I18n.t('continue')}</Text>
          </Pressable>
      </TouchableHighlight>
  )
}
