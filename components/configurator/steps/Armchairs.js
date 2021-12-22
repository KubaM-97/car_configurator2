import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import chairBlack from "~/assets/images/armchairs/chairBlack.png"
import chairYellow from "~/assets/images/armchairs/chairYellow.png"
import chairGreen from "~/assets/images/armchairs/chairGreen.png"
import chairPurple from "~/assets/images/armchairs/chairPurple.png"
import chairRed from "~/assets/images/armchairs/chairRed.png"
import chairBlue from "~/assets/images/armchairs/chairBlue.png"

import Step from '~/components/configurator/Step';

export default function Armchairs() {
    
  const [armchairs, setEngines] = useState([
    {id: uuid.v4(), img: chairBlack, name: "Black", price: 750},
    {id: uuid.v4(), img: chairYellow, name: "Golden", price: 750},
    {id: uuid.v4(), img: chairGreen, name: "Green", price: 750},
    {id: uuid.v4(), img: chairPurple, name: "Purple", price: 750},
    {id: uuid.v4(), img: chairRed, name: "Red", price: 750},
    {id: uuid.v4(), img: chairBlue, name: "Blue", price: 750},
])
    
  return (
      <Step items={armchairs} category="Armchairs" />
  )
}


