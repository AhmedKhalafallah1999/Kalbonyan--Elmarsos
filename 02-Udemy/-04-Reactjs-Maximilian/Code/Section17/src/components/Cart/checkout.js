import { useRef, useState } from "react";
import "./checkout.css";
const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInutRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInutRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isEmpty(enteredPostal);
    const enteredCityIsValid = isFiveChar(enteredCity);
    setFormValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
      street: enteredStreetIsValid,
    });
    const formIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;
    if (formIsValid) {
    }
  };

  return (
    <form className="form" onSubmit={confirmHandler}>
      <div className="control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p style={{color:'red'}}>Please enter a Valid Name</p>}
      </div>
      <div className="control">
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInutRef} />
        {!formInputValidity.street && <p style={{color:'red'}}>Please enter a Valid Street</p>}
      </div>
      <div className="control">
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p style={{color:'red'}}>Please enter a Valid Postal Code</p>}
      </div>
      <div className="control">
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p style={{color:'red'}}>Please enter a Valid City</p>}
      </div>
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
