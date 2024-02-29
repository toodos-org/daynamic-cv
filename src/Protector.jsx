import { Navigate } from "react-router-dom";

const Protector = ({ children }) => {
  const isLoggedIn = localStorage.getItem("cv-maker") ? true : false;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default Protector;
