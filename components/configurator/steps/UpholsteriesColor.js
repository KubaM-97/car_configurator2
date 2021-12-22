import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import Step from '~/components/configurator/Step';

import upholsteryBlack from "~/assets/images/upholsteriesColor/upholsteryBlack.png"
import upholsteryGreen from "~/assets/images/upholsteriesColor/upholsteryGreen.png"
import upholsteryRed from "~/assets/images/upholsteriesColor/upholsteryRed.png"

export default function UpholsteriesColor() {
    
  const [upholsteriesColor, setUpholsteriesColor] = useState([
    {id: uuid.v4(), img: upholsteryBlack, name: "Black", price: 300},
    {id: uuid.v4(), img: upholsteryGreen, name: "Green", price: 300},
    {id: uuid.v4(), img: upholsteryRed, name: "Red", price: 300}
])
    
  return (
      <Step items={upholsteriesColor} category="Upholsteries' Color" />
  )
}






