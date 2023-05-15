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
 
  return (
    <form>
      <h1> name </h1>,
      <h1> email </h1>,
      <h1> phone number </h1>,
      
      
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
      <textarea id = "bio" name = "bio" rows = "4" cols = "50"></textarea>,
      <p class = "container"> <input type = "checkbox" /> <span class = "checkmark"></span>check for email
      email notifications</p>
      {/* <input type = "checkbox" id = "email_notifications" name = "email_notifications">email</input> */}
    </form>
  )
}

export default Form;