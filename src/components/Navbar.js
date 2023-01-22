import React, { useState } from 'react'
import '../index.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [pass, setpass] = useState("password");
  const [bi, setbi] = useState("bi-eye");
  const [mystyle, setstyle] = useState("#b4e0ff")
  const [co, setco] = useState(null)
  const [navt, setnavt] = useState("nav-link_light");
  const [show, setshow] = useState("none")
  const ptoggle = () => {
    if (pass === "password") {
      setpass("text");
      setbi("bi-eye-slash")
    }
    else {
      setpass("password");
      setbi("bi-eye")
    }
  };

  const theme = () => {
    if (mystyle === "#b4e0ff") {
      setstyle("#3700B3")
      setco({ color: 'yellow' })
      setnavt("nav-link_dark");
    }
    else {
      setstyle("#b4e0ff");
      setco()
      setnavt("nav-link_light")
    }
  }

  const handleOnChange = (e) => {
    if (e.target.value === "") {
      setshow("none");
    }
    else {
      setshow("block")
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow mb-2" style={{ backgroundColor: mystyle }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="./kmit-bar.png" alt='Unable To Load' style={{ width: "3.5rem" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <Link className={`nav-link ${navt}`} aria-current="page" style={co} to="/" id="navhome">Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className={`nav-link ${navt}`} aria-current="page" style={co} to="/events" id="navevents">Events</Link>
              </li>
              <li className="after_login nav-item mx-5">
                <Link className={`nav-link ${navt}`} aria-current="page" style={co} to="/Schedule" id="navsch">Schedule Event</Link>
              </li>
              <li className="after_login nav-item mx-5">
                <Link className={`nav-link ${navt}`} aria-current="page" style={co} to="/Reports" id="navreports">Reports</Link>
              </li>
              <li className="after_login nav-item mx-5">
                <Link className={`nav-link ${navt}`} aria-current="page" style={co} to="/Requests" id="navreq">Requests</Link>
              </li>
            </ul>
            <Link onClick={theme} style={{ cursor: "pointer" , color: "black" }}><i className={`${mystyle === "#b4e0ff" ? "bi bi-moon-fill" : "bi bi-sun-fill"} me-3 fs-5`} style={mystyle === "#b4e0ff" ? null : { filter: "invert(1)" }}></i></Link>
            <button className={`btn btn-outline-${mystyle === "#b4e0ff" ? "success" : "light"} px-5`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <h4>Username</h4>
                    <input type="text" className="form-control col-8" placeholder="User Name" aria-label="User Name"
                      name="User Name" aria-describedby="basic-addon1" id="UserName" />
                    <h4 className="mt-3">Password</h4>
                    <input type={pass} className="form-control col-8" placeholder="Password" aria-label="Password"
                      name="Password" aria-describedby="basic-addon1" id="Pass" onChange={handleOnChange} />
                    <Link style={{ display: show, marginTop: "-30px", marginLeft: "auto", marginRight: "1rem" }} type="button"><i className={bi} onClick={ptoggle}></i></Link>
                    <button type="submit" className="btn btn-primary mt-5">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}