import { useState, useEffect } from "react";
import Header from "../Components/Header";

export default function Login() {
  const [form, setForm] = useState({
    usernameInput: "",
    passwordInput: "",
    button: true,
  });

  useEffect(() => {
    validateUsernameAndPassword();
  }, [form.usernameInput, form.passwordInput]);

  const [button, setButton] = useState(true);

  const validateUsernameAndPassword = () => {
    const { usernameInput, passwordInput } = form;
    if (usernameInput.length >= 3 && passwordInput.length >= 6) {
      setButton(false);
    } else {
      setButton(true)
    }
  };

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    const updateState = {
      ...form,
      [name]: value,
    };
    setForm(updateState);
    validateUsernameAndPassword();
  };

  const onBtnClick = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Header/>
      <form action="" 
        method="post"
      >
        <div>
          <div className="formLabel">
            <label htmlFor="usernameInput">Username</label>
          </div>
          <div className="formInput">
            <input
              id="usernameInput" 
              name="usernameInput" 
              type="text"
              placeholder="Type your username"
              onChange={onFieldChange}
            />
          </div>
        </div>
        <div>
          <div className="formLabel">
            <label htmlFor="passwordInput">Password</label>
          </div>
          <div className="formInput">
            <input 
              id="passwordInput" 
              name="passwordInput" 
              type="password"
              placeholder="Type your password"
              onChange={onFieldChange}
            />
          </div>
        </div>
        <div>
          <input type="checkbox" name="checkbox" id="checkbox"/>
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <div>
          <button 
            type="submit"
            onClick={() => onBtnClick()}
            disabled={button}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
