import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Welcome from "~/components/configurator/Welcome"
import Layer from "~/components/global/Layer"

import Engine from "~/components/configurator/steps/Engine"
import BodyColor from "~/components/configurator/steps/BodyColor"
import RimColor from "~/components/configurator/steps/RimColor"
import RimSize from "~/components/configurator/steps/RimSize"
import Armchairs from "~/components/configurator/steps/Armchairs"
import UpholsteriesColor from "~/components/configurator/steps/UpholsteriesColor"
import Accessories from "~/components/configurator/steps/Accessories"

// import Summary from "~/components/configurator/steps/Summary"

import { setStepsLength } from '~/redux/actions'

export default function Main() {
    const steps = [
        {id: 0, component: Welcome}, 
        {id: 1, component: Engine},
        {id: 2, component: BodyColor},
        {id: 3, component: RimColor},
        {id: 4, component: RimSize},
        {id: 5, component: Armchairs},
        {id: 6, component: UpholsteriesColor},
        {id: 7, component: Accessories},
        // {id: 8, component: Summary}
    ];

    const { currentStep } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setStepsLength(8));
    }, [dispatch])

    const currentComponent = steps[currentStep].component;
    
    return (
        <SafeAreaView style={styles.container}>
            <Layer />
            {
                React.createElement(currentComponent)
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 500,
        width: '90%',
        alignItems: 'center',
    },
});