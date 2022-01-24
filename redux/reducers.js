import {
    SET_SELECTED_ITEMS,
    SET_SELECTED_MULTI_ITEMS,
    SET_STEPS_LENGTH,
    SET_CURRENT_STEP,
    SET_LANGUAGE,
} from '~/redux/actions'
import i18n from 'react-native-i18n';
import update from 'react-addons-update'

const initialState = {
    selectedItems: [],
    currentStep: 0,
    stepsLength: 1,
    ourLanguage: i18n.locale
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_ITEMS:
            const selectedItems = [...state.selectedItems]
            console.log(action.payload.multi ? 'multi' : 'no');
            if(action.payload.multi) selectedItems.some(el => el.name === action.payload.name) ? selectedItems = selectedItems.filter(el => el.name !== action.payload.name)  : selectedItems = [...state.selectedItems, action.payload]
            else selectedItems[state.currentStep - 1] = action.payload
            return {
                ...state,
                selectedItems
            }
        // case SET_SELECTED_MULTI_ITEMS:
        //     const x = state.selectedItems.some(el => el.name === action.payload.name) ? state.selectedItems.filter(el => el.name !== action.payload.name)  : [...state.selectedItems, action.payload]
        //     return {
        //         ...state,
        //         selectedItems: x
        //     }
        case SET_STEPS_LENGTH:
            return {...state, stepsLength: action.payload}
        case SET_CURRENT_STEP:
            return {...state, currentStep: action.payload}
        case SET_LANGUAGE:
            i18n.locale = action.payload
            return {...state, ourLanguage: action.payload} 
        default: return state;
    }
}

export default userReducer;
