import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import Step from '~/components/configurator/Step';

import rimBlack from "~/assets/images/rimsColor/rimBlack.png"
import rimGreen from "~/assets/images/rimsColor/rimGreen.png"
import rimPink from "~/assets/images/rimsColor/rimPink.png"

export default function RimsColor() {
    
  const [rimsColor, setRimsColor] = useState([
    {id: uuid.v4(), img: rimBlack, name: "Black", price: 300},
    {id: uuid.v4(), img: rimGreen, name: "Green", price: 300},
    {id: uuid.v4(), img: rimPink, name: "Pink", price: 300}
])
    
  return (
      <Step items={rimsColor} category="Rims' Color" />
  )
}


