import "./DownloadPopup.css";

function DownloadPopup(_props) {
  function cvPrint() {
    _props.sliderToggle(false);

    setTimeout(() => {
      window.print();
    }, 100);
  }

  return (
    <>
      <div
        className={_props.toggleVal ? "download-modal open" : " download-modal"}
      >
        <div className="download-modal-parent">
          <div className="download-modal-main">
            <div className="download-modal-child">
              <div className="download-modal-top">
                <form>
                  <div className="download-modal-left">
                    <svg viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                  {/* --- END! download-modal-left --- */}

                  <div className="download-modal-right">
                    <input
                      type="text"
                      placeholder="Type a command or search..."
                    />

                    <div className="cross-btn">
                      <button
                        type="button"
                        onClick={() => _props.sliderToggle(false)}
                      >
                        <svg viewBox="0 0 24 24">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {/* --- END! download-modal-right --- */}
                </form>
              </div>
              {/* --- END! download-modal-top --- */}

              <div className="download-modal-bottom">
                <div className="download-modal-bottom-data">
                  <h5>Actions</h5>

                  <ul>
                    <li>
                      <a onClick={() => cvPrint()}>Print</a>
                    </li>
                  </ul>
                </div>

                <div className="download-modal-bottom-data">
                  <h5>Links</h5>

                  <ul>
                    <li>
                      <a>Personal Website</a>
                    </li>
                    <li>
                      <a>Github</a>
                    </li>
                    <li>
                      <a>Linkedin</a>
                    </li>
                    <li>
                      <a>X</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* --- END! download-modal-bottom --- */}
            </div>
          </div>
          {/* --- END! download-modal-main --- */}
        </div>
      </div>
      {/* --- END! download-modal --- */}
    </>
  );
}

export default DownloadPopup;
