import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

import Step from '~/components/configurator/Step';

import upholsteryBlack from "~/assets/images/upholsteriesColor/upholsteryBlack.png"
import upholsteryGreen from "~/assets/images/upholsteriesColor/upholsteryGreen.png"
import upholsteryRed from "~/assets/images/upholsteriesColor/upholsteryRed.png"

export default function UpholsteriesColor() {
    
  const [upholsteriesColor, setUpholsteriesColor] = useState([
    {id: uuid.v4(), img: upholsteryBlack, name: I18n.t('Black'), price: 300},
    {id: uuid.v4(), img: upholsteryGreen, name: I18n.t('Green'), price: 300},
    {id: uuid.v4(), img: upholsteryRed, name: I18n.t('Red'), price: 300}
])
    
  return (
      <Step items={upholsteriesColor} category={I18n.t('upholsteries')} />
  )
}






