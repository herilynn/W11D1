import {useState} from "react";
import './forms.css';

function Form (props) {

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
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
      {/* <input type = "radio" id = "instructor">Instructor</input>,
      <input type = "radio" id = "student">Student</input>, */}
      <textarea id = "bio" name = "bio" rows = "4" cols = "50"></textarea>,
      {/* <input type = "checkbox" id = "email_notifications" name = "email_notifications">email</input> */}
    </form>
  )
}

export default Form;