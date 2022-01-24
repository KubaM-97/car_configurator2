import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import rimBlack from "~/assets/images/rimsColor/rimBlack.png"
import rimGreen from "~/assets/images/rimsColor/rimGreen.png"
import rimPink from "~/assets/images/rimsColor/rimPink.png"

import Step from '~/components/configurator/Step';

export default function RimsColor() {
    
  const [rimsColor, setRimsColor] = useState([
    {id: uuid.v4(), img: rimBlack, name: 'rimsBlack', price: 300},
    {id: uuid.v4(), img: rimGreen, name: 'rimsGreen', price: 300},
    {id: uuid.v4(), img: rimPink, name: 'rimsPink', price: 300}
])
    
  return (
      <Step items={rimsColor} category='rimsColor' />
  )
}


