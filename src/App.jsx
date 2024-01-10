import { useState } from "react";
import "./App.css";
import Main from "/src/components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Main />
      {/* 
        This is our Main component. 
        All Component are inner this component.
      */}
    </div>
  );
}

export default App;
