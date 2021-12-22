import Rim15 from "~/assets/images/rimsSize/rim15.png"
import Rim16 from "~/assets/images/rimsSize/rim16.png"
import Rim17 from "~/assets/images/rimsSize/rim17.png"

import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import Step from '~/components/configurator/Step';

export default function RimsSize() {
    
  const [rimSize, setRimsSize] = useState([
    {id: uuid.v4(), img: Rim15, name: "15 inches", price: 800},
    {id: uuid.v4(), img: Rim16, name: "16 inches", price: 1400},
    {id: uuid.v4(), img: Rim17, name: "17 inches", price: 2200}
])
    
  return (
      <Step items={rimSize} category="Rims' Size" />
  )
}
