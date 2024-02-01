import { useMutation } from "@apollo/client";
import { useState } from "react";
import { SIGN_UP_REQUEST } from "../../../gql_operation/mutation";
import "./AccessRequest.css";

function AccessRequest() {
  const [signUpRequest, { data, loading, error }] = useMutation(
    SIGN_UP_REQUEST,
    {
      onCompleted: (res) => {
        console.log("hello");
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  // access request get input data
  const [accessReq, getAccessReq] = useState("");

  // access request input err msg show
  const [accessReqErr, setAccessReqErr] = useState(false);

  /**
   * access req form handle function
   * accessReqFormHandle()
   */
  const regex = /\S+@\S+\.\S+/;
  function accessReqFormHandle(e) {
    if (accessReq == "" && accessReq.trim() == "") {
      setAccessReqErr(true);
    } else {
      if (regex.test(accessReq)) {

        console.log(accessReq);
        signUpRequest({
          variables: {
            input: {
              email: accessReq,
            },
          },
        });
        setAccessReqErr(false);
      } else {
        setAccessReqErr(true);
      }
    }
    e.preventDefault();
  }

  return (
    <>
      <section className="access-req">
        <div className="access-req-main">
          <div className="access-req-main-left">
            <h1>Sign In</h1>
          </div>
          {/* --- END! access-req-main-left --- */}

          <div className="access-req-main-right">
            <form onSubmit={(e) => accessReqFormHandle(e)}>
              <div className="input-box">
                <p>
                  <label htmlFor="email">Email</label>
                </p>

                <div className="input-box-area">
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => getAccessReq(e.target.value)}
                  />
                  {accessReqErr ? (
                    <p>
                      <span>This fill is required!</span>
                    </p>
                  ) : null}
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
