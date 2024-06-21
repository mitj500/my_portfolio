import React, { useState } from "react";

export default function TextForm(props) {
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

  const [text, setText] = useState(" ");

  const HighlightAdjectives = () => {
    const [text, setText] = useState('The quick brown fox jumps over the lazy dog');
  
    const highlightAdjectives = () => {
      const words = text.split(' ');
      const adjectiveRegex = /\b(?:quick|brown|lazy)\b/g; // Add more adjectives as needed
  
      const highlightedSentence = words.map((word, index) => (
        adjectiveRegex.test(text) ? <span key={index} style={{ backgroundColor: 'yellow' }}>{text}</span> : <span key={index}>{text}</span>
      ));
  
      return highlightedSentence;
    };

  return (
    <>
      <div className="container">
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
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          make it uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          make it lowercase
        </button>
        <div>
      <div>{highlightAdjectives()}</div>
      <button onClick={highlightAdjectives}>Highlight Adjectives</button>
    </div>
      </div>
      <div className="container my-2">
        <h1>your text summary</h1>
        <p>
          your words are {text.split(" ").length} of the text is {text.length}{" "}
          characters
        </p>
        <p>your{0.008 * text.split(" ").length} minutes can be characters</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
