import {
    SET_SELECTED_ITEMS,
    SET_STEPS_LENGTH,
    SET_CURRENT_STEP,
    SET_LANGUAGE,
} from '~/redux/actions'

const initialState = {
    selectedItems: [],
    currentStep: 0,
    stepsLength: 1,
    ourLanguage: 'pl'
}

function userReducer(state = initialState, action) {
    const isItemExists = state.selectedItems.some(el => el.category === action.payload.category);
    switch (action.type) {
        case SET_SELECTED_ITEMS:
            if (isItemExists) {
                const index = state.selectedItems.findIndex(el => el.category === action.payload.category)
                return {
                    ...state,
                    selectedItems: state.selectedItems.map(
                        (item, i) => i !== index ? {... item} : action.payload
                    )
                }
            }
            if (!isItemExists) {
                return {
                    ...state,
                    selectedItems: [...state.selectedItems, action.payload]
                }
            }
            case SET_STEPS_LENGTH:
               return {...state, stepsLength: action.payload}
            case SET_CURRENT_STEP:
               return {...state, currentStep: action.payload}
            case SET_LANGUAGE:
               return {...state, ourLanguage: action.payload}
        default: return state;
    }
}

export default userReducer;
