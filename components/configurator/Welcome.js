import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { globalStyles } from '~/assets/style';
import I18n from '~/lang/i18n';

export default function Welcome(props) {

    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Text style={globalStyles.text}>
                    {I18n.t('welcome_message')} 
                </Text>
                <TouchableOpacity style={globalStyles.button}>
                    <Pressable onPress={()=>props.onNextStep()}>
                        <Text style={[globalStyles.text, styles.text]}>
                            {I18n.t('lets_start')}
                        </Text>
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
