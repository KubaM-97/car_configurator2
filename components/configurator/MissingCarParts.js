import React, {useState, useImperativeHandle, forwardRef} from 'react';
import { TouchableHighlight, Pressable, Text, Alert, StyleSheet, View, Modal, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import I18n from '~/lang/i18n';

import { globalStyles } from '~/assets/style';
import { setCurrentStep } from '~/redux/actions'

export default MissingCarParts = forwardRef((props, ref) => {
  const { title } = props;
  const dispatch = useDispatch();
  const { selectedItems, currentStep, stepsLength } = useSelector(state => state.userReducer);

  const nextStep = () => {
    currentStep !== stepsLength - 1 ? dispatch(setCurrentStep(currentStep+1)) : showAlert()
  }

  useImperativeHandle(ref, () => ({
    showAlert() {
        console.log('dupdupdupa');
        setIsAlertVisible(true)
    },
  }));

  const [isAlertVisible, setIsAlertVisible] = useState(false)
//   const dupa = () => {
      const requiredParts = ['engines', 'bodyColor', 'rimsColor', 'rimsSize', 'armchairs', 'upholsteries']
    //   selectedItems.map(el => console.log(el.category))
      const is = requiredParts.some( el => selectedItems.includes(el.category))
      const is2 = requiredParts.filter( el => el !== selectedItems.includes(el.category))
      console.log(is, is2);
//   }
  return (
    <Modal transparent={true} visible={isAlertVisible} animationType="slide">
        <View style={styles.missingCarPartsAlert}>
            <Text style={{color: 'white'}}> Nie ma tych części </Text>
            {/* <FlatList
              data={missingParts}
              keyExtractor={(item) => item.id}
              renderItem={( {item} ) => <Text item={{...item, category: this.state.category, multi: this.state.multi}} />}
              horizontal
              contentContainerStyle={{color: 'white'}}
          /> */}
            <Button title='OK' onPress={()=>setIsAlertVisible(false)} style={styles.button} />
        </View>
    </Modal>
  )
})


const styles = StyleSheet.create({
    missingCarPartsAlert: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '40%',
        backgroundColor: 'red',
        color: 'white',
        opacity: .7,
    },
    button: {
        paddingTop: 20,
    }
})