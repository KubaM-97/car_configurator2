import React, {useEffect} from 'react'
import { View, Text} from 'react-native'

import i18n from 'react-native-i18n';
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '~/redux/actions'

export default function LanguageProvider(props) {
    const dispatch = useDispatch()
    const { ourLanguage } = useSelector(state => state.userReducer);
    i18n.locale = ourLanguage; 
    useEffect(() => {
        dispatch(setLanguage('pl'))
    }, [dispatch])
    return (
        <View>
            <Text style={{color: 'red'}}>xxxxxxxxxxxxxxxx {ourLanguage} {i18n.locale}</Text>
            {/* {props.children} */}
        </View>
    )
}
