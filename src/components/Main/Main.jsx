import { Route, Routes } from "react-router-dom";
import Protector from "../../Protector";
import AccessRequest from "./AccessRequest/AccessRequest";
import CV from "./CV/CV";
import Login from "./Login/Login";
import "./Main.css";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/access-request"
          element={
            <Protector>
              <AccessRequest />
            </Protector>
          }
        />
        <Route
          path="/cv"
          element={
            <Protector>
              <CV />
            </Protector>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
