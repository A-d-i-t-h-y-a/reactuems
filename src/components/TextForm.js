import React, { useState } from 'react'

export default function TextForm(props) {
    // const handleUpClick = (event)=>{
    //     // console.log("Upper Case is clicked "+text);
    //     if (event.target.innerHTML === "Convert to lower case"){
    //         let newtext = text.toLowerCase();
    //         setText(newtext);
    //         event.target.innerHTML = "Convert to Upper case"
    //     }
    //     else{
    //         let newtext = text.toUpperCase();
    //         setText(newtext);
    //         event.target.innerHTML = "Convert to lower case";
    //     }

    // }

    // const handleOnChange = (e)=>{
    //     // console.log("on Change");
    //     setText(e.target.value);
    // }

    // const clear = ()=>{
    //     setText("");
    // }

    // const Copy = ()=>{
    //     navigator.clipboard.writeText(text);
    // }
    // const [text, setText] = useState("");
    // // setText("kabfhbhbvnshdkk");
    // let words = text.split(" ").length;
    // if(text === "")
    //     words = 0;
    return (
        <>
            {/* <div className='container'>
                // {/* <div className="mb-3">
                //     <label for="exampleFormControlInput1" className="form-label">Email address</label>
                //     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                // </div> 
                
                <h1 style={{color: props.text === "dark"?"black":"white"}}>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> 
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
            </div> */}
            <div id="carouselExampleCaptions" className="carousel slide mx-auto w-75 my-3 carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./imgs/eventimgjfif.jfif" className="w-100 d-block" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./imgs/festimg.jfif" className="w-100 d-block" alt="..." />
                        {/* <!-- <img src="https://source.unsplash.com/random/900x600/?dance" className="d-block w-100" alt="..."> --> */}
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./imgs/musicimg.jfif" className="w-100 d-block" alt="..." />
                        {/* <!-- <img src="https://source.unsplash.com/random/900x600/?arts" className="d-block w-100" alt="..."> --> */}
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
