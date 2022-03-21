import useNewInput from "../hooks/useInputReducer";//new-use-inpu

const stringValidator = val => val.trim() !== '';
const emailValidator = val => val.includes('@');
const BasicForm = (props) => {

  let formValid = false; 

  const {
    value: firstName,
    valid: firstNameIsValid,
    hasError: firstNameHasError,
    onInputChange: firstNameOnChange,
    onInputBlur: firstNameOnBlur,
    reset: firstNameOnReset
  } = useNewInput(stringValidator);

  const {
    value: lastName,
    valid: lastNameIsValid,
    hasError: lastNameHasError,
    onInputChange: lastNameOnChange,
    onInputBlur: lastNameOnBlur,
    reset: lastNameOnReset
  } = useNewInput(stringValidator)

  const {
    value: email,
    valid: emailIsValid,
    hasError: emailHasError,
    onInputChange: emailOnChange,
    onInputBlur: emailOnBlur,
    reset: emailOnReset
  } = useNewInput(emailValidator)

  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formValid = true; 
  }

  const formSubmit = (evt) => {
    evt.preventDefault(); 

    firstNameOnReset();
    lastNameOnReset();
    emailOnReset();
  };

 
  const firstNameClasses = !firstNameHasError ? 'form-control' : 'form-control invalid';
  const lastNameClasses = !lastNameHasError ? 'form-control' : 'form-control invalid';
  const emailClasses = !emailHasError ? 'form-control' : 'form-control invalid';


  return (
    <form onSubmit={formSubmit}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name'  onChange={firstNameOnChange} onBlur={firstNameOnBlur} value={firstName} />
          {firstNameHasError && <p>FirstName must not be an empty string</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name'  onChange={lastNameOnChange} onBlur={lastNameOnBlur} value={lastName}/>
          {lastNameHasError && <p>FirstName must not be an empty string</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailOnChange} onBlur={emailOnBlur} value={email}/>
        {emailHasError && <p>You must enter a valid email</p>}
      </div>
      <div className={'form-actions'}>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
