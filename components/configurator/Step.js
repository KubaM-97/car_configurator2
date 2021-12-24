import React from 'react';
import { View, FlatList, Text,  StyleSheet } from 'react-native';

import Item from "~/components/configurator/Item"
import { globalStyles } from '~/assets/style';
import BackStepButton from '~/components/global/BackStepButton';
import ContinueButton from '~/components/global/ContinueButton';
import { useSelector } from 'react-redux';

export default function Step(props) {
    const { items, category } = props;
    const { currentStep, stepsLength } = useSelector(state => state.userReducer);
    
    return (
        <View style={styles.container}>
          { currentStep !== 1 ? <BackStepButton /> : null }
          <View style={styles.header}>
                <Text style={[globalStyles.text, styles.headerText]}>{currentStep}/{stepsLength} {category}</Text>
          </View>
          <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={( {item} ) => <Item item={{...item, category}} />}
          />
          <ContinueButton />
        </View>
    )
}














const styles = StyleSheet.create({
  header:{
    marginTop: 30,
  },
  headerText:{
    fontSize: 28, 
    color: '#5fb2ff', 
  },
  container: {
    width: '80%',
    position: 'relative',
    height: 400,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    marginTop: 0,
    marginBottom: 40,
    alignSelf: 'center'
  }
})



