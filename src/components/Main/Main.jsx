import { BrowserRouter, Route, Routes } from "react-router-dom";
import CV from "./CV/CV";
import Login from "./Login/Login";
import "./Main.css";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default Main;
