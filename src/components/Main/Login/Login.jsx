import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGN_IN_USER } from "../../../gql_operation/mutation";
import "./Login.css";

function Login() {
  // USE LOGIN REQUEST
  const [signInRequest, { data, loading, error }] = useMutation(SIGN_IN_USER, {
    onCompleted: (res) => {
      localStorage.setItem("cv-maker", res?.tokenAuth?.token);
      navigate("/cv");
    },
    onError: (err) => {
      alert("Please try again!");
    },
  });

  // FORM DATA
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const checkEmail = /\S+@\S+\.\S+/;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      (!formData.username || !checkEmail.test(formData.username)) &&
      !formData.password
    ) {
      setFormError({
        username: !formData.username
          ? "Email is required"
          : "Email is not valid",
        password: !formData.password ? "Password is required!" : "",
      });
    } else {
      if (!formData.username || !checkEmail.test(formData.username)) {
        setFormError({
          username: !formData.username
            ? "Email is required"
            : "Email is not valid",
          password: "",
        });
      } else if (!formData.password) {
        setFormError({
          username: "",
          password: !formData.password ? "Password is required!" : "",
        });
      } else {
        signInRequest({
          variables: {
            ...formData,
          },
        });
        setFormError({});
      }
    }
  };

  // USE FOR ROUTE NAVIGATE
  const navigate = useNavigate();

  return (
    <>
      <section className="login">
        <div className="login-main">
          <div className="login-main-left">
            <h1>Sign Up</h1>
          </div>
          {/* --- END! login-main-left --- */}

          <div className="login-main-right">
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="input-box">
                <p>
                  <label htmlFor="email">Email</label>
                </p>

                <div className="input-box-area">
                  <input
                    id="email"
                    type="text"
                    name="username"
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter email"
                  />
                  {formError && formError.username ? (
                    <p>{formError.username}</p>
                  ) : null}
                </div>
              </div>
              {/* --- END! input-box (email) --- */}

              <div className="input-box">
                <p>
                  <label htmlFor="password">Password</label>
                </p>

                <div className="input-box-area">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter password"
                  />
                  {formError && formError.password ? (
                    <p>{formError.password}</p>
                  ) : null}
                </div>
              </div>
              {/* --- END! input-box (password) */}

              <div className="request-mail">
                <Link to="/access-request">Access Request</Link>
              </div>

              <div className="submit-btn submit-btn-first">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          {/* --- END! login-main-right --- */}
        </div>
      </section>
      {/* --- END! login --- */}
    </>
  );
}

export default Login;
