import React from 'react';
import { TouchableOpacity, Pressable, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { globalStyles } from '~/assets/style';
import { setCurrentStep } from '~/redux/actions';

import { Ionicons } from '@expo/vector-icons';

export default function ContinueButton() {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.userReducer);

  return (
      // <TouchableOpacity style={[globalStyles.button, styles.button]}>
      <TouchableOpacity style={{position: 'absolute', top: 40, left: -20 }}>
          <Pressable onPress={()=>dispatch(setCurrentStep(currentStep-1))}>
              {/* <Ionicons name="settings-outline" size={24} color="white" style={styles.xxx}/> */}
              {/* <Ionicons name="settings" size={24} color="white" /> */}
              <Ionicons name="arrow-back" size={24} color="white" style={styles.xxx}/>
          </Pressable>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginTop: 0,
    marginBottom: 40,
    alignSelf: 'center'
  },
  // xxx:{
  //   animation: '2'
  // }
  // @keyframes x {

  // }
})




// import React, { useRef, useEffect } from 'react';
// import { Animated, Text, View } from 'react-native';

// const FadeInView = (props) => {
//   const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

//   React.useEffect(() => {
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 10000,
//       }
//     ).start();
//   }, [fadeAnim])

//   return (
//     <Animated.View                 // Special animatable View
//       style={{
//         ...props.style,
//         opacity: fadeAnim,         // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// }

// // You can then use your `FadeInView` in place of a `View` in your components:
// export default () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
//       </FadeInView>
//     </View>
//   )
// }