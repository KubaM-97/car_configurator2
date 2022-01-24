import React, {useRef} from 'react';
import { TouchableHighlight, Pressable, Text, Alert, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import I18n from '~/lang/i18n';

import { globalStyles } from '~/assets/style';
import { setCurrentStep } from '~/redux/actions'

import MissingCarParts from '~/components/configurator/MissingCarParts'

export default function ContinueButton(props) {
  const { title } = props;
  const dispatch = useDispatch();
  const { currentStep, stepsLength } = useSelector(state => state.userReducer);

  const missingCarPartsRef = useRef(null);
  const nextStep = () => {
    currentStep !== stepsLength - 1 ? dispatch(setCurrentStep(currentStep+1)) : missingCarPartsRef.current.showAlert()
  }

  
  return (
          
      <TouchableHighlight style={globalStyles.button}>
          <Pressable onPress={nextStep}>
              <Text style={globalStyles.text}>{ title || I18n.t('continue')}</Text>
            <MissingCarParts ref={missingCarPartsRef} />
          </Pressable>
      </TouchableHighlight>
  )
}
