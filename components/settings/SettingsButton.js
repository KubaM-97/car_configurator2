import React, { useRef, useState } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Easing, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
  
export default function SettingsButton(props) {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '540deg'],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
    ],
  };
  const openSettingsPanel = () => {
    handleAnimation();
    props.settingsPanelRef.openModal();
  }
  return (
    <TouchableOpacity
      onPress={openSettingsPanel}
      style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}
    >
      <Animated.View style={[styles.settingsButton, animatedStyle]}>
            <Ionicons color='lightblue' name="settings-outline" size={28} />
            </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    settingsButton: {
        marginRight: 40
    }
});
