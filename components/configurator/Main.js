import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Animated, Text, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
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
import i18n from 'react-native-i18n';

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

    const { currentStep, ourLanguage } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();
    
    i18n.locale = ourLanguage 
    useEffect(() => {
        console.log('oooo');
        dispatch(setStepsLength(8));
    }, [dispatch])

    const currentComponent = steps[currentStep].component;
    

    const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

    const handleAnimation = () => {
        console.log('dsdsd');
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }).start(() => {
        // rotateAnimation.setValue(0);
      });
    //   onSetShowSettingsPanel
    };
  
    const interpolateRotating = rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -540],
    });
  
    const animatedStyle = {
      transform: [
        {
          translateX: interpolateRotating,
        },
      ],
    };








    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback
                onPress={async () => handleAnimation()}
            >
                {/* <Layer  onPress={async () => handleAnimation()}/> */}
                <Animated.View style={animatedStyle}>
                    {
                        React.createElement(currentComponent)
                    }
                </Animated.View> 
            </TouchableWithoutFeedback> 
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