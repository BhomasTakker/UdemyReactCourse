import { useState } from "react";

const useInput = (validateValue) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && isTouched; 

    const onInputChange = (evt) => {
        setValue(evt.target.value);
      }

      const onInputBlur = evt => {
        setIsTouched(true);
      }

    const reset = () => {
        setValue('');
        setIsTouched(false);
    };

    return {
        value: value, 
        valid: valueIsValid,
        hasError,
        onInputChange,
        onInputBlur,
        reset
    }
  
};

export default useInput; 