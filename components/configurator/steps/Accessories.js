import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import LED from "~/assets/images/accessories/LED.jpg"
import soundSystem from "~/assets/images/accessories/soundSystem.jpg"
import sportsSuspension from "~/assets/images/accessories/sportsSuspension.jpg"

import Step from '~/components/configurator/Step';

export default function Accessories() {
    
  const [accessories, setEngines] = useState([
    {id: uuid.v4(), img: LED, name: "LED", price: 270},
    {id: uuid.v4(), img: soundSystem, name: "Sound System", price: 400},
    {id: uuid.v4(), img: sportsSuspension, name: "Sports Suspension", price: 1410}
  ])
    
  return (
      <Step items={accessories} category="Accesories"/>
  )
}


