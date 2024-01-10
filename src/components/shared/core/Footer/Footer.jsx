import { useState } from "react";
import DownloadPopup from "../DownloadPopup/DownloadPopup";
import "./Footer.css";

function Footer() {
  const [data, setData] = useState(false);
  let controlBtn = false;

  function sliderToggle(data) {
    setData(data);

    // open header sidler do not scroll body
    if (data) {
      document.getElementsByTagName("body")[0].classList.add("slider-show");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("slider-show");
      controlBtn = true;
    }
  }

  // keyboard kye btn click
  window.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "shift") {
      controlBtn = true;
    }

    if (e.key.toLowerCase() === "f" && controlBtn === true) {
      sliderToggle(true);
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.key.toLowerCase() === "shift") {
      controlBtn = false;
    }
  });

  window.addEventListener("click", (e) => {
    console.log(e);
  });

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-child">
            <p>
              Press
              <span>
                Shift + <small>f</small>
              </span>
              to open the command menu
            </p>
          </div>
          <div className="footer-res-child">
            <button type="button" onClick={() => sliderToggle(true)}>
              <svg viewBox="0 0 24 24">
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>

      <DownloadPopup
        sliderToggle={sliderToggle}
        toggleVal={data}
      ></DownloadPopup>
    </>
  );
}

export default Footer;
