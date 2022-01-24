import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import bodyYellow from "~/assets/images/bodiesColor/bodyYellow.png"
import bodyGreen from "~/assets/images/bodiesColor/bodyGreen.png"
import bodyGrey from "~/assets/images/bodiesColor/bodyGrey.png"
import bodyLemon from "~/assets/images/bodiesColor/bodyLemon.png"
import bodyRed from "~/assets/images/bodiesColor/bodyRed.png"
import bodyBlue from "~/assets/images/bodiesColor/bodyBlue.png"
import bodyOrange from "~/assets/images/bodiesColor/bodyOrange.png"
import bodyPink from "~/assets/images/bodiesColor/bodyPink.png"

import Step from '~/components/configurator/Step';

export default function BodyColor() {
    
  const [bodiesColor, setBodiesColor] = useState([
    {id: uuid.v4(), img: bodyYellow, name: 'bodyColorYellow', price: 940},
    {id: uuid.v4(), img: bodyGreen, name: 'bodyColorGreen', price: 940},
    {id: uuid.v4(), img: bodyGrey, name: 'bodyColorGrey', price: 940},
    {id: uuid.v4(), img: bodyLemon, name: 'bodyColorLemon', price: 940},
    {id: uuid.v4(), img: bodyRed, name: 'bodyColorRed', price: 940},
    {id: uuid.v4(), img: bodyBlue, name: 'bodyColorBlue', price: 940},
    {id: uuid.v4(), img: bodyOrange, name: 'bodyColorOrange', price: 940},
    {id: uuid.v4(), img: bodyPink, name: 'bodyColorPink', price: 940}
])
    
    return (
        <Step items={bodiesColor} category='bodyColor' />
    )
}
