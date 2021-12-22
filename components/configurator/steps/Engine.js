import React, { useState } from 'react';
import uuid from 'react-native-uuid';

import engineHeat from "~/assets/images/engines/engineHeat.jpg"
import engineCombustion from "~/assets/images/engines/engineCombustion.jpg"
import engineIon from "~/assets/images/engines/engineIon.jpg"
import Step from '~/components/configurator/Step';

export default function Engine() {
    
    const [engines, setEngines] = useState([
        {id: uuid.v4(), img: engineHeat, name: "Heat", price: 600},
        {id: uuid.v4(), img: engineCombustion, name: "Combustion", price: 31000},
        {id: uuid.v4(), img: engineIon, name: "Ion", price: 176000}
    ])
    return (
        <Step items={engines} category="Engines" />
    )
}
