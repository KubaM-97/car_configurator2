import { connect } from 'react-redux';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Animated } from 'react-native';

import Welcome from "~/components/configurator/Welcome"
import Layer from "~/components/global/Layer"

import Engine from "~/components/configurator/steps/Engine"
import BodyColor from "~/components/configurator/steps/BodyColor"
import RimColor from "~/components/configurator/steps/RimColor"
import RimSize from "~/components/configurator/steps/RimSize"
import Armchairs from "~/components/configurator/steps/Armchairs"
import UpholsteriesColor from "~/components/configurator/steps/UpholsteriesColor"
import Accessories from "~/components/configurator/steps/Accessories"

import Summary from "~/components/configurator/steps/Summary"

import { setStepsLength } from '~/redux/actions'
import i18n from 'react-native-i18n';

class Main extends Component {
    state = {
      steps: [
        {id: 0, component: Welcome}, 
        {id: 1, component: Engine},
        {id: 2, component: BodyColor},
        {id: 3, component: RimColor},
        {id: 4, component: RimSize},
        {id: 5, component: Armchairs},
        {id: 6, component: UpholsteriesColor},
        {id: 7, component: Accessories},
        {id: 8, component: Summary}
      ],
      dispatch: this.props.dispatch,
      currentStep: this.props.currentStep,
      rotateAnimation: new Animated.Value(0),
    }

    componentDidMount(){
      this.state.dispatch((setStepsLength(this.state.steps.length - 1)))
    }

    shouldComponentUpdate(nextProps){
      Animated.timing(this.state.rotateAnimation, {
        toValue: -1,
        duration: 200,
        useNativeDriver: true,
      }).start(async () => { 
        if(this.state.currentStep !== nextProps.currentStep) this.setState({currentStep:nextProps.currentStep})
        this.state.rotateAnimation.setValue(1);
        Animated.timing(this.state.rotateAnimation, {
          toValue: 0,
          duration: 100, 
          delay: 50,
          useNativeDriver: true,
        }).start(() => {
          this.state.rotateAnimation.setValue(0);
        });
      });
      return false
    }  
      
    interpolateRotating = () => {
      return this.state.rotateAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [-540, 0, 540],
      });
    }
    animatedStyle = {
      transform: [
        {
          translateX: this.interpolateRotating(),
        },
      ],
    };
  
    render() {
      return(
        <SafeAreaView style={styles.container}>
              <Layer />
            <Animated.View style={this.animatedStyle}>
                {
                  React.createElement(this.state.steps[this.state.currentStep].component)
                }
            </Animated.View> 
          </SafeAreaView>
        )
      }
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
});

const mapStateToProps = state => {
    return {
        currentStep: state.userReducer.currentStep,
    };
};

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
