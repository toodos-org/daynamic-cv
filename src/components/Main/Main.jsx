import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccessRequest from "./AccessRequest/AccessRequest";
import CV from "./CV/CV";
import Login from "./Login/Login";
import "./Main.css";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/access-request" element={<AccessRequest />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
