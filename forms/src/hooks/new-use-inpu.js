import { useState } from 'react';

const useNewInput = (validateValue) => {
    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validateValue(value);
    const hasError = !isValid && isTouched; 

    const onInputChange = (evt) => {
        setValue(evt.target.value);
    };
    const onInputBlur = (evt) => {
        setIsTouched(true);
    };
    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value,
        valid: isValid, 
        hasError,
        onInputBlur,
        onInputChange,
        reset

    }
};

export default useNewInput; 