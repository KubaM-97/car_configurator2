import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import engineHeat from "~/assets/images/engines/engineHeat.png"
import engineCombustion from "~/assets/images/engines/engineCombustion.png"
import engineIon from "~/assets/images/engines/engineIon.png"

import Step from '~/components/configurator/Step';

export default function Engine() {
    
    const [engines, setEngines] = useState([
        {id: uuid.v4(), img: engineHeat, name: 'heat', price: 600},
        {id: uuid.v4(), img: engineCombustion, name: 'combustion', price: 31000},
        {id: uuid.v4(), img: engineIon, name: 'ion', price: 176000}
    ])

    return (
        <Step items={engines} category='engine' />
    )
    
}
