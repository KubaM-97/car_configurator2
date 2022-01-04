import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '~/assets/style';
import I18n from '~/lang/i18n';
import ContinueButton from '../global/ContinueButton';

export default function Welcome() {

    return (
        <View style={styles.container}>
            <Text style={[globalStyles.text, styles.text]}>
                {I18n.t('welcome_message')} 
            </Text>
            <ContinueButton title={I18n.t('lets_start')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '80%',
        marginTop: '10%',
        justifyContent: 'space-between',
    },
    text: {
        color: '#5fb2ff',
        padding: 8,
        fontSize: 30,
        marginTop: '10%',
    }
  });

// import PropTypes from "prop-types"
// Welcome.propTypes = {
//     onGoOn: PropTypes.func
// }
