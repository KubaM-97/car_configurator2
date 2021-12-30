import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

import armchairBlack from "~/assets/images/armchairs/chairBlack.png"
import armchairYellow from "~/assets/images/armchairs/chairYellow.png"
import armchairGreen from "~/assets/images/armchairs/chairGreen.png"
import armchairPurple from "~/assets/images/armchairs/chairPurple.png"
import armchairRed from "~/assets/images/armchairs/chairRed.png"
import armchairBlue from "~/assets/images/armchairs/chairBlue.png"

import Step from '~/components/configurator/Step';

export default function Armchairs() {
    
  const [armchairs, setEngines] = useState([
    {id: uuid.v4(), img: armchairBlack, name: I18n.t('armchairsBlack'), price: 750},
    {id: uuid.v4(), img: armchairYellow, name: I18n.t('armchairsGolden'), price: 750},
    {id: uuid.v4(), img: armchairGreen, name: I18n.t('armchairsGreen'), price: 750},
    {id: uuid.v4(), img: armchairPurple, name: I18n.t('armchairsPurple'), price: 750},
    {id: uuid.v4(), img: armchairRed, name: I18n.t('armchairsRed'), price: 750},
    {id: uuid.v4(), img: armchairBlue, name: I18n.t('armchairsBlue'), price: 750},
])
    
  return (
      <Step items={armchairs} category={I18n.t('armchairs')} />
  )
}


