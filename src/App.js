import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setmode] = useState("light"); //wherthe my dark mode is on or not
  const [alert, setAlert] = useState(null);
  
  const showAlert= (message,type) => {
    setAlert({
      msg:message,
     type:type
    })
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is been enabled","success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is been enabled","success");
    }
  };

  return (
    <>
      <NavBar title=" textformaterAi" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3 ">
        <Alert alert={alert} />
        <TextForm heading="Enter the name you want" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
