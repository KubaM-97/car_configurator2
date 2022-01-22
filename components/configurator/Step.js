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
    const title = currentStep !== stepsLength - 1 ? I18n.t('continue') : I18n.t('summarize');
    return (
        <View style={styles.container}>
          <BackStepButton />
          <Text style={[globalStyles.text, styles.headerText]}>{currentStep}/{stepsLength} {category}</Text>
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



