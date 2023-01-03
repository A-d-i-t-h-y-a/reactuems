import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event)=>{
        // console.log("Upper Case is clicked "+text);
        if (event.target.innerHTML === "Convert to lower case"){
            let newtext = text.toLowerCase();
            setText(newtext);
            event.target.innerHTML = "Convert to Upper case"
        }
        else{
            let newtext = text.toUpperCase();
            setText(newtext);
            event.target.innerHTML = "Convert to lower case";
        }
        
    }

    const handleOnChange = (e)=>{
        // console.log("on Change");
        setText(e.target.value);
    }

    const clear = ()=>{
        setText("");
    }

    const Copy = ()=>{
        navigator.clipboard.writeText(text);
    }
    const [text, setText] = useState("");
    // setText("kabfhbhbvnshdkk");
    let words = text.split(" ").length;
    if(text === "")
        words = 0;
    return (
        <>
            <div className='container'>
                {/* <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div> */}
                
                <h1 style={{color: props.text === "dark"?"black":"white"}}>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary mx-3" onClick={clear}>Clear</button>
                <button className="btn btn-primary" onClick={Copy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h2 style={{color: props.text === "dark"?"black":"white"}}>Your Text Summary</h2>
                <p style={{color: props.text === "dark"?"black":"white"}}>{words} words and {text.length} characters</p>
                <p style={{color: props.text === "dark"?"black":"white"}}>Time to read is {0.008*words} minutes</p>
                <h2 style={{color: props.text === "dark"?"black":"white"}}>Preview</h2>
                <p style={{color: props.text === "dark"?"black":"white"}}>{text}</p>
            </div>
        </>
  )
}
