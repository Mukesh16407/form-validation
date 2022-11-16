import "./styles.css";
import { useState } from "react";

export default function App() {
  const [userRegistration, setUserRegistration] = useState({
    userName: "",
    fullName: "",
    age: ""
  });
  const [display, setDisplay] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  return (
    <form onClick={handleSubmit}>
      <div>
        <label htmlFor="userName">
          Username:
          <input
            value={userRegistration.userName || ""}
            name="userName"
            onChange={handleInput}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="fullName">
          FullName:
          <input
            value={userRegistration.fullName || ""}
            name="fullName"
            type="text"
            onChange={handleInput}
          />
        </label>
      </div>
      <br />
      <div>
        <label htmlFor="age">
          Age:
          <input
            value={userRegistration.age || ""}
            name="age"
            onChange={handleInput}
          />
        </label>
      </div>
      <br />
      <button>Submit</button>
      {display && (
        <>
          <h4>Request Sent to DB with below request data</h4>
          <ul>
            <li>UserName: {userRegistration.userName.toUpperCase()}</li>
            <li>FullName: {userRegistration.fullName.toUpperCase()}</li>
            <li>Age: {userRegistration.age}</li>
          </ul>
        </>
      )}
    </form>
  );
}
