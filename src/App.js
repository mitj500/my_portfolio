import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3 ">
      <TextForm  heading ="Enter the name you want"/>  
      </div>
      
    </>
  );
}

export default App;
