import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Contexts/Auth";
import Header from "../Components/Header";
import '../Styles/Login.css';

//remember me com token jwt

export default function Login() {
  const [form, setForm] = useState({
    usernameInput: "",
    passwordInput: "",
    button: true,
  });

  const { authenticated, login } = useContext(AuthContext);

  const [checkbox, setCheckbox] = useState(false);

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

  const onBtnClick = async (event) => {
    event.preventDefault();
    const { usernameInput, passwordInput } = form;

    login(usernameInput, passwordInput);
  }

  return (
    <>
      <Header/>
      <div className="form">
        <form action="" 
          className="loginForm"
        >
          <div>
            <p>{ String(authenticated) }</p>
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
          <div className="checkboxClass">
            <input 
              type="checkbox" 
              name="checkbox" 
              id="checkbox"
              onChange={setCheckbox}
            />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div>
            <button 
              id="submitBtn"
              type="submit"
              onClick={onBtnClick}
              disabled={button}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
