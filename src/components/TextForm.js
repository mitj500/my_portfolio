import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(" ");
  const handleUpClick = () => {
    console.log("clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("oncahlled");
    setText(event.target.value);
  };

  return (
    <>

    
<div className="container style={{Color:props.mode==='dark'?'grey':'black'}}  ">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label">
            Example textarea
          </label>
          <textarea 
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'light',Color:props.mode==='dark'?'grey':'black '}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >
          {" "}
          make it uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          make it lowercase
        </button>
      <div className="container my-2 style={{backgroundColor:props.mode==='dark'?'grey':'light',Color:props.mode==='dark'?'grey':'black '}}" >
        <h1>your text summary</h1>
        <p>
          your words are {text.split(" ").length} of the text is {text.length}{" "}
          characters
        </p>
        <p>your{0.008 * text.split(" ").length} minutes can be characters</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
        </div>
    </>
  );
}