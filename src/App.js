import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Schedule from './components/Schedule';
import Reports from './components/Reports';
import Requests from './components/Requests';
import Footer from './components/Footer';
import Events from './components/Events';
import Home from './components/Home';
import Alert from './components/Alert';

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

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
      <div className='container my-3'>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/events" element={<Events/>}></Route>
          <Route exact path="/Schedule" element={<Schedule/>}></Route>
          <Route exact path="/Reports" element={<Reports/>}></Route>
          <Route exact path="/Requests" element={<Requests/>}></Route>
          <Route exact path="/" element={<Home heading="Enter the Text to Analyse Below" text={text}/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;
