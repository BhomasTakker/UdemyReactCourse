import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (val) => val.trim() === '';
const isNot5 = (val) => val.length !== 5;

const Checkout = (props) => {

    const [formInputValidity, setInputFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true,
    });


    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();
    

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = !isNot5(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setInputFormValidity({
        name: nameIsValid,
        street: streetIsValid,
        postal: postalIsValid,
        city: cityIsValid,
    });

    const formIsValid = streetIsValid && nameIsValid && postalIsValid && cityIsValid;

    if(!formIsValid){
        return;
    }

    props.onSubmit({
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${!formInputValidity.name && classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formInputValidity.name && <p>Name is not valid</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.street && classes.invalid}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formInputValidity.street && <p>Street is not valid</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.postal && classes.invalid}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
        {!formInputValidity.postal && <p>Postal code is not valid</p>}
      </div>
      <div className={`${classes.control} ${!formInputValidity.city && classes.invalid}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formInputValidity.city && <p>City is not valid</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;