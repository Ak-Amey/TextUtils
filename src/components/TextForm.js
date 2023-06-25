import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText]=useState('')


    const handleUpClick=()=>{
        console.log("Uppercase clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully Converted to Upper Case","success")
    }

    const handlelowCase=()=>{
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("Successfully Converted to Lower Case","success")
    }

    const handleclearCase=()=>{
      let newText1='';
      setText(newText1);
      props.showAlert("Successfully Cleared Screen","success")
  }

  const handleCopy=()=>{
    var text=document.getElementById('my-text');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Successfully Copied Text","success")
  }

    const handleOnChange=(event)=>{
        setText("")
        console.log("onChange");
        setText(event.target.value)
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Successfully Removed Extra Space","success")
    }

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2 className="mt-5" >{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          border
          style={{
            backgroundColor : props.mode==='#042743'?'':'white', color:props.mode==='#042743'?'white':'dark ',borderColor:props.mode==='light'?'black':'white',border: '2px solid black'
          }}
          id="my-text"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowCase}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearCase}>Clear Button</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Button</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something"}</p>
    </div>
    </>
  );
}
