import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles } from '~/assets/style';
import { useTranslation } from 'react-i18next';

export default function Welcome(props) {
    const { t, i18n } = useTranslation();

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Text style={globalStyles.text}>
                    Welcome to our car configurator!!!
                </Text>
                <Text style={globalStyles.text}>
                    Click on the button below! kk {t('translation')}
                </Text>
                <TouchableOpacity style={globalStyles.button}>
                    <Pressable onPress={()=>props.onNextStep()}>
                        <Text style={[globalStyles.text, styles.text]}>Let's start!!!</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 400,
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: '#5fb2ff',
        padding: 8,
        fontSize: 30,
    }
  });

// import PropTypes from "prop-types"
// Welcome.propTypes = {
//     onGoOn: PropTypes.func
// }
