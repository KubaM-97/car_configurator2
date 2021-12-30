import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

import Step from '~/components/configurator/Step';

import rimBlack from "~/assets/images/rimsColor/rimBlack.png"
import rimGreen from "~/assets/images/rimsColor/rimGreen.png"
import rimPink from "~/assets/images/rimsColor/rimPink.png"

export default function RimsColor() {
    
  const [rimsColor, setRimsColor] = useState([
    {id: uuid.v4(), img: rimBlack, name: I18n.t('rimsBlack'), price: 300},
    {id: uuid.v4(), img: rimGreen, name: I18n.t('rimsGreen'), price: 300},
    {id: uuid.v4(), img: rimPink, name: I18n.t('rimsPink'), price: 300}
])
    
  return (
      <Step items={rimsColor} category={I18n.t('rimsColor')} />
  )
}


