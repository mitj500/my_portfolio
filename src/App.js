import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //wherthe my dark mode is on or not
  const [alert, setAlert] = useState("ahowAlert");
  
  const showAlert= (message,type) => {
    setAlert({
      msg:message,
     type:type
    })
    setTimeout(() => {
      setAlert("");
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is been enabled","success");
      document.title='dark mode analysis'
      setInterval(() => {
        
      }, 1000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is been enabled","success");
    }
  };

  return (
    <>
      <Router>
        <NavBar title=" textformaterAi" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3 ">
          <Routes>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the name you want"
                mode={mode}
              />
            </Route>
          </Routes>
          <Alert alert={alert} />
        </div>
      </Router>
    </>
  );
}

export default App;
