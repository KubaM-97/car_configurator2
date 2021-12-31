import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

import engineHeat from "~/assets/images/engines/engineHeat.jpg"
import engineCombustion from "~/assets/images/engines/engineCombustion.jpg"
import engineIon from "~/assets/images/engines/engineIon.jpg"

import Step from '~/components/configurator/Step';

export default function Engine() {
    
    const [engines, setEngines] = useState([
        {id: uuid.v4(), img: engineHeat, name: I18n.t('heat'), price: 600},
        {id: uuid.v4(), img: engineCombustion, name: I18n.t('combustion'), price: 31000},
        {id: uuid.v4(), img: engineIon, name: I18n.t('ion'), price: 176000}
    ])

    return (
        <Step items={engines} category={I18n.t('engine')} />
    )
    
}
