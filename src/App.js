import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {  
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("dark");
  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    }
    else{
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "white";
    }
    
  } 
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter the Text to Analyse Below" text={text}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
