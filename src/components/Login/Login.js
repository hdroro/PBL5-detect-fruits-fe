/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { EyeIconClose, EyeIconOpen } from "../Icon/Icon";
import "./Login.scss";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const [isToggleassword, setIsToggleassword] = useState(false);

  const handleTogglePassword = () => {
    setIsToggleassword(!isToggleassword);
  };

  const defaultValidInput = {
    isValidEmail: true,
    isValidPassword: true,
  };

  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  const isValidInputs = () => {
    setObjCheckInput(defaultValidInput);
    let re = /\S+@\S+\.\S+/;
    if (!email) {
      toast.error("Email is required !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }
    if (!re.test(email)) {
      toast.error("Please enter a valid email address !");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!passWord) {
      toast.error("Password is required !");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    return true;
  };

  const handleSave = () => {
    const check = isValidInputs();
    if (check) {
      console.log("email", email, "password", passWord);
    }
  };

  return (
    <div className="form-login ">
      <div className="title">Login</div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address <span className="shrink-star">(*)</span>
        </label>
        <div className="form-group">
          <input
            type="email"
            className={`form-control ${
              objCheckInput.isValidEmail ? "" : "is-invalid"
            }`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">
          Password <span className="shrink-star">(*)</span>
        </label>
        <div className="form-group d-flex align-items-center">
          <input
            type={`${isToggleassword ? "text" : "password"}`}
            className={`form-control ${
              objCheckInput.isValidPassword ? "" : "is-invalid"
            }`}
            id="password"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
          />
          {isToggleassword ? (
            <EyeIconOpen
              className="mx-3"
              onClick={() => handleTogglePassword()}
            />
          ) : (
            <EyeIconClose
              className="mx-3"
              onClick={() => handleTogglePassword()}
            />
          )}
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-end">
        <button
          className="btn btn-warning btn-login"
          onClick={() => handleSave()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
