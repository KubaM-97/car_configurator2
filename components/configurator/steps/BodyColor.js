import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import I18n from '~/lang/i18n';

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
    {id: uuid.v4(), img: bodyYellow, name: I18n.t('bodyColorYellow'), price: 940},
    {id: uuid.v4(), img: bodyGreen, name: I18n.t('bodyColorGreen'), price: 940},
    {id: uuid.v4(), img: bodyGrey, name: I18n.t('bodyColorGrey'), price: 940},
    {id: uuid.v4(), img: bodyLemon, name: I18n.t('bodyColorLemon'), price: 940},
    {id: uuid.v4(), img: bodyRed, name: I18n.t('bodyColorRed'), price: 940},
    {id: uuid.v4(), img: bodyBlue, name: I18n.t('bodyColorBlue'), price: 940},
    {id: uuid.v4(), img: bodyOrange, name: I18n.t('bodyColorOrange'), price: 940},
    {id: uuid.v4(), img: bodyPink, name: I18n.t('bodyColorPink'), price: 940}
])
    
    return (
        <Step items={bodiesColor} category={I18n.t('bodyColor')} />
    )
}
