//import { useRef, useState } from 'react';
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {

  const 
    {
      value: name, 
      valid: nameIsValid, 
      hasError: nameError,
      onInputChange: nameInputChange,
      onInputBlur: nameInputBlur,
      reset: nameReset
    } = useInput((val) => {
      return val.trim() !== '';
    });

  const 
    {
      value: email, 
      valid: emailIsValid, 
      hasError: emailError,
      onInputChange: emailInputChange,
      onInputBlur: emailInputBlur,
      reset: emailReset
    } = useInput((val) => {
      return val.includes('@');
    });


  // const inputRef = useRef();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  
  // const [enterredNameTouched, setEnterredNameTouched] = useState(false);
  // const [emailTouched, setEmailTouched] = useState(false);

  // const nameIsValid = name.trim() !== '';
  // const nameInputIsInvalid = !nameIsValid && enterredNameTouched; 

  // const emailIsValid = email.trim() !== '';//do a proper check here
  // const emailInputIsInvalid = !emailIsValid && emailTouched; 


  let formIsValid = false;

      if (nameIsValid && emailIsValid){
        formIsValid = true;
      } 


  // const onChangeHandler = (evt) => {
  //   console.log(evt.target.value);
    
  //   setName(evt.target.value);
  // }

  // const onEmailChangeHandler = (evt) => {
  //   setEmail(evt.target.value);
  // }

  // const onInputBlur = evt => {
  //   setEnterredNameTouched(true);
  // }

  // const onEmailBlur = evt => {
  //   setEmailTouched(true);
  //}

  const formSubmissionHandler = evt => {
    evt.preventDefault();
    // setEnterredNameTouched(true);
    // setEmailTouched(true);

    if(!nameIsValid || !emailIsValid){
      return;
    }

    // setEnterredNameTouched(false);
    // setEmailTouched(false);
    nameReset();
    emailReset();
    
  };

  const nameInputClasses = !nameError ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !emailError ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChange} onBlur={nameInputBlur} value={name} />
        {nameError && <p className={'error-text'}>Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChange} onBlur={emailInputBlur} value={email} />
        {emailError && <p className={'error-text'}>Email must not be empty</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
