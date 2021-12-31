export const SET_SELECTED_ITEMS = 'SET_SELECTED_ITEMS';
export const SET_STEPS_LENGTH = 'SET_STEPS_LENGTH';
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setSelectedItems = item => dispatch => {
    dispatch({
        type: SET_SELECTED_ITEMS,
        payload: item
    })
}

export const setStepsLength = stepsLength => dispatch => {
    dispatch({
        type: SET_STEPS_LENGTH,
        payload: stepsLength
    })
}
export const setLanguage = stepsLength => dispatch => {
    dispatch({
        type: SET_LANGUAGE,
        payload: stepsLength
    })
}

export const setCurrentStep = currentStep => dispatch => {
    dispatch({
        type: SET_CURRENT_STEP,
        payload: currentStep
    })
}
