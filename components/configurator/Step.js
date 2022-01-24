import React, { Component } from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';

import Item from "~/components/configurator/Item"
import { globalStyles } from '~/assets/style';
import BackStepButton from '~/components/global/BackStepButton';
import ContinueButton from '~/components/global/ContinueButton';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import I18n from '~/lang/i18n';

class Step extends Component {

    state = {
      currentStep: this.props.currentStep,
      stepsLength: this.props.stepsLength,
      title: this.props.currentStep !== this.props.stepsLength - 1 ? I18n.t('continue') : I18n.t('summarize'),
      items: this.props.items,
      category: this.props.category,
      multi: this.props.multi,
    }

    async shouldComponentUpdate(){
        return true 
    }

    render() {
      return (
        <View style={styles.container}>
          <BackStepButton />
          <Text style={[globalStyles.text, styles.headerText]}>{this.state.currentStep}/{this.state.stepsLength} {I18n.t(this.state.category)}</Text>
          <FlatList
              data={this.state.items}
              keyExtractor={(item) => item.id}
              renderItem={( {item} ) => <Item item={{...item, category: this.state.category, multi: this.state.multi}} />}
              horizontal
              contentContainerStyle={styles.items}
          />
          <ContinueButton title={this.state.title}/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  headerText:{
    fontSize: 28, 
    color: '#5fb2ff', 
  },
  container: {
    width: '80%',
    height: '80%',
  },
  items: {
    alignSelf: 'center', 
  }
})

const mapStateToProps = state => {
    return {
        currentStep: state.userReducer.currentStep,
        stepsLength: state.userReducer.stepsLength,
    };
};


export default connect(mapStateToProps)(Step);

