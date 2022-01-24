import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import armchairBlack from "~/assets/images/armchairs/chairBlack.png"
import armchairYellow from "~/assets/images/armchairs/chairYellow.png"
import armchairGreen from "~/assets/images/armchairs/chairGreen.png"
import armchairPurple from "~/assets/images/armchairs/chairPurple.png"
import armchairRed from "~/assets/images/armchairs/chairRed.png"
import armchairBlue from "~/assets/images/armchairs/chairBlue.png"

import Step from '~/components/configurator/Step';

export default function Armchairs() {
    
  const [armchairs, setEngines] = useState([
    {id: uuid.v4(), img: armchairBlack, name: 'armchairsBlack', price: 750},
    {id: uuid.v4(), img: armchairYellow, name: 'armchairsGolden', price: 750},
    {id: uuid.v4(), img: armchairGreen, name: 'armchairsGreen', price: 750},
    {id: uuid.v4(), img: armchairPurple, name: 'armchairsPurple', price: 750},
    {id: uuid.v4(), img: armchairRed, name: 'armchairsRed', price: 750},
    {id: uuid.v4(), img: armchairBlue, name:'armchairsBlue', price: 750},
])
    
  return (
      <Step items={armchairs} category='armchairs' />
  )
}


