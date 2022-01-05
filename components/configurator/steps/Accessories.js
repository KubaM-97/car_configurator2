import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

import LED from "~/assets/images/accessories/LED.png"
import soundSystem from "~/assets/images/accessories/soundSystem.png"
import sportsSuspension from "~/assets/images/accessories/sportsSuspension.png"

import Step from '~/components/configurator/Step';

export default function Accessories() {
    
  const [accessories, setEngines] = useState([
    {id: uuid.v4(), img: LED, name: I18n.t('LED'), price: 270},
    {id: uuid.v4(), img: soundSystem, name: I18n.t('soundSystem'), price: 400},
    {id: uuid.v4(), img: sportsSuspension, name: I18n.t('sportsSuspension'), price: 1410}
  ])
    
  return (
      <Step items={accessories} category={I18n.t('accessories')}/>
  )
}


