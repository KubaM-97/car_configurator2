import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Welcome from "~/components/configurator/Welcome"
import Layer from "~/components/configurator/global/Layer"

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
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(255, 0, 0)',
        opacity: 0.8,
        width: '100%',
        marginHorizontal: 'auto',
        height: 100,
    },
    imgBackground: {
        flex: 1,
        width: '100%',
    },
});