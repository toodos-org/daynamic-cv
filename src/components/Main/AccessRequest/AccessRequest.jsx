import "./AccessRequest.css";

function AccessRequest() {
  return (
    <>
      <section className="access-req">
        <div className="access-req-main">
          <div className="access-req-main-left">
            <h1>Sign In</h1>
          </div>
          {/* --- END! access-req-main-left --- */}

          <div className="access-req-main-right">
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

              <div className="submit-btn">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          {/* --- END! access-req-main-right --- */}
        </div>
      </section>
      {/* --- END! access-req --- */}
    </>
  );
}

export default AccessRequest;
