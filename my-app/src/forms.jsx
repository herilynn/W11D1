import {useState} from "react";
import './forms.css';

function Form (props) {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorMessages, setErrorMessages] = useState([]);

  const validate = () => {
    let errors = [];
    
    if (firstName.length === 0) {
      errors.push("First name can't be empty");
    }
    if (email.length === 0) {
      errors.push("Email can't be empty");
    }
    if (phoneNumber.length !== 10) {
      errors.push("Phone number should only be 10 digits")
    }
    return errors;
  }

  const handleChange = field => {
    return (e) => {
      switch(field){
        case "firstName":
          setFirstName(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          break;
          default:
          break;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = validate();

    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      let user = {
        firstName,
        email,
        phoneNumber
      };
      console.log(user);
    }
  }

  const showErrors = () => {
    if (!errorMessages.length) {
      return null;
    } else {
      return (
        <ul>
          {errorMessages.map((error, i) => <li key = {i}>{error}</li>)}
        </ul>
      )
    }
  }

 
  return (
    <>
    {showErrors()}
    <form className = 'form' onSubmit={handleSubmit}>
      {/* <h1> name </h1>, */}
      <input type = "text" placeholder="name" value = {firstName} onChange={handleChange('firstName')}></input>
      <input type = "text" placeholder="email" value = {email} onChange={handleChange('email')}></input>
      <input type = "text" placeholder="PhoneNumber" value = {phoneNumber} onChange={handleChange('phoneNumber')}></input>


      
      <div className = "dropdown">
        <button className = "dropbtn">dropdown</button>,
        <div className = "dropdown-content">
          <a href = "#">Home</a>
          <a href = "#">Work</a>
          <a href = "#">Mobile</a>
        </div>
      </div>,
      <h1> Staff </h1>,
      <p class = "container"><input type = "radio" value = "instructor" checked = {props.selectOption === 'instructor'} onChange={props.handleChange} />Instructor</p>,
      <p class = "container"><input type = "radio" value = "student" checked = {props.selectOption === 'student'} onChange={props.handleChange} />Student</p>,
      <textarea id = "bio" name = "bio" rows = "4" cols = "70"></textarea>,
      <p class = "container"> <input type = "checkbox" /> <span class = "checkmark"></span>check for email
      email notifications</p>
      {/* <input type = "checkbox" id = "email_notifications" name = "email_notifications">email</input> */}
      <button>Submit</button>
    </form>
    </>
    
  )
}

export default Form;