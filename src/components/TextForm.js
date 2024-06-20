import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("oncahlled");
    setText(event.target.value)
  };
  const [text, setText] = useState("enter the text");

  return (
    <>
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <label for="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        {" "}
        button
      </button>
    </>
  );
}
