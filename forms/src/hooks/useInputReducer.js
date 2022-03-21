import { useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false
}
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return { value: action.value, isTouched: state.isTouched};
    }
    if(action.type === 'BLUR'){
        return { isTouched: true, value: state.value };
    }
    if(action.type === 'RESET'){
        return initialInputState;
    }
    return initialInputState; 
};

const useNewInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    const isValid = validateValue(inputState.value);
    const hasError = !isValid && inputState.isTouched; 

    const onInputChange = (evt) => {
        dispatch({type: 'INPUT', value: evt.target.value});
    };
    const onInputBlur = (evt) => {
        dispatch({type: 'BLUR'});
    };
    const reset = () => {
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        valid: isValid, 
        hasError,
        onInputBlur,
        onInputChange,
        reset

    }
};

export default useNewInput; 