import "./Profile.css";

function Profile(props) {
  return (
    <>
      <section className="profile-main">
        <div className="container">
          <div className="profile-main-child">
            <div className="profile-main-child-left">
              <h1>
                {props?.profileData?.name
                  ? props?.profileData?.name
                  : "Set your name!"}
              </h1>

              <p>
                {props?.profileData?.bio
                  ? props?.profileData?.bio
                  : "Set your bio"}
              </p>

              <div className="location">
                <a href={props?.profileData?.addresUrl} target="_blank">
                  <small>
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </small>
                  <span>
                    {props?.profileData?.address
                      ? props?.profileData?.address
                      : "Set your address"}
                  </span>
                </a>
              </div>

              <div className="profile-social-media">
                <ul>
                  <li>
                    <a
                      href={`mailto:${props.profileData.socialSet.edges[0].node.email}`}
                      target="_blank"
                    >
                      <svg className="withOutFill" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={`tel:${props.profileData.socialSet.edges[0].node.phone}`}
                    >
                      <svg className="withOutFill" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={props.profileData.socialSet.edges[0].node.github}
                      target="_blank"
                    >
                      <svg className="withFill" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={props.profileData.socialSet.edges[0].node.linkedin}
                      target="_blank"
                    >
                      <svg className="withFill" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={props.profileData.socialSet.edges[0].node.twitter}
                      target="_blank"
                    >
                      <svg className="withFill" viewBox="0 0 24 24">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                      </svg>

                      <span>
                        <svg viewBox="0 0 32 32">
                          <path
                            d="M28.77 8.11a.87.87 0 0 0-.23-.2A4.69 4.69 0 0 0 29 6.54a1 1 0 0 0-.44-1 1 1 0 0 0-1.1 0 6.42 6.42 0 0 1-2.28.92 6.21 6.21 0 0 0-7.08-1A6.07 6.07 0 0 0 15 12.2a1 1 0 0 0 2-.4 4.08 4.08 0 0 1 2-4.52 4.24 4.24 0 0 1 5.12 1 1 1 0 0 0 .88.28h.25a1 1 0 0 0 .34 1.62 1 1 0 0 0-.36.88 13.07 13.07 0 0 1-4.89 11.24 12.75 12.75 0 0 1-12.65 2.31 9.06 9.06 0 0 0 4.54-2.18 1 1 0 0 0 .15-1.09 1 1 0 0 0-.93-.57 4 4 0 0 1-3-1.39 3.63 3.63 0 0 0 1-.35A1 1 0 0 0 10 18a1 1 0 0 0-.76-.84 4.42 4.42 0 0 1-3-2.48c.24 0 .48.05.74.06a1 1 0 0 0 1-.62A1 1 0 0 0 7.67 13C6 11.48 5.59 9.85 5.83 8.7a13.88 13.88 0 0 0 7 4 1 1 0 1 0 .38-2 12.1 12.1 0 0 1-6.82-4.39 1 1 0 0 0-.75-.38 1 1 0 0 0-.78.33 5.34 5.34 0 0 0-.31 6h-.09a1 1 0 0 0-.52.81 5.84 5.84 0 0 0 1.95 4.47 1 1 0 0 0-.18 1 6.63 6.63 0 0 0 3.18 3.57A13.89 13.89 0 0 1 4 23a1 1 0 0 0-.5 1.86 16.84 16.84 0 0 0 8.5 2.49 15.16 15.16 0 0 0 9.6-3.57 15.12 15.12 0 0 0 5.69-12.42 4.62 4.62 0 0 0 1.62-2.25 1 1 0 0 0-.14-1Z"
                            data-name="twitter bird social media trending"
                            fill="#000000"
                            className="color000 svgShape"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* END! profile-main-child-left */}

            <div className="profile-main-child-right">
              <img src={props?.profileData?.image} alt="profile-img" />
            </div>
            {/* END! profile-main-child-right */}
          </div>
          {/* --- END! profile-main-child --- */}
        </div>
      </section>
      {/* --- END! profile-main --- */}
    </>
  );
}

export default Profile;
