import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
   const [mode, setmode] = useState("light"); //wherthe my dark mode is on or not

    const toggleMode= ()=>{
      if (mode==='light'){
        setmode("dark");
        document.body.style.backgroundColor='grey';
      }
      else{
        setmode("light");
        document.body.style.backgroundColor='white';
      }
    }


  return (
    <>
      <NavBar title=" textformaterAi" mode ={mode} toggleMode={toggleMode}/>
      <div className="container my-3 ">
      <TextForm  heading ="Enter the name you want" mode={mode}/>  
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
