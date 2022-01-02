import React from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';

import Item from "~/components/configurator/Item"
import { globalStyles } from '~/assets/style';
import BackStepButton from '~/components/global/BackStepButton';
import ContinueButton from '~/components/global/ContinueButton';
import { useSelector } from 'react-redux';
import I18n from '~/lang/i18n';

export default function Step(props) {
    const { items, category } = props;
    const { currentStep, stepsLength } = useSelector(state => state.userReducer);
    const title = currentStep !== stepsLength - 1 ? I18n.t('continue') : I18n.t('summarization');
    return (
        <View style={styles.container}>
          <BackStepButton />
          <View style={styles.header}>
                <Text style={[globalStyles.text, styles.headerText]}>{currentStep}/{stepsLength} {category}</Text>
          </View>
          <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={( {item} ) => <Item item={{...item, category}} />}
              horizontal
              contentContainerStyle={styles.items}
          />
          <ContinueButton title={title}/>
        </View>
    )
}














const styles = StyleSheet.create({
  header:{
    // marginTop: 30,
  },
  headerText:{
    fontSize: 28, 
    color: '#5fb2ff', 
  },
  container: {
    marginTop: 30,

    backgroundColor: 'pink',
    width: '80%',
    position: 'relative',
    // height: 400,
    marginTop: '10%',
    // justifyContent: 'center',
    alignSelf: 'center'
  },
  button: {
    // width: '90%',
    // marginTop: 0,
    // marginBottom: 40,
    // alignSelf: 'center'
  },
  items: {
    backgroundColor: 'red',
    alignSelf: 'center', 
    // justifyContent: 'center',
    // height: '100%',
  }
})



