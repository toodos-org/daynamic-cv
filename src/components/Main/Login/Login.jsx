import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <section className="login">
        <div className="login-main">
          <div className="login-main-left">
            <h1>Sign Up</h1>
          </div>
          {/* --- END! login-main-left --- */}

          <div className="login-main-right">
            <form>
              <div className="input-box">
                <p>
                  <label htmlFor="email">Email</label>
                </p>

                <div className="input-box-area">
                  <input id="email" type="text" placeholder="Enter email" />
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
                    placeholder="Enter password"
                  />
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
