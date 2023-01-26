import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../index.css';
import { Link, useLocation , useNavigate} from 'react-router-dom';

export default function Navbar() {
  const [pass, setpass] = useState("password");
  const [bi, setbi] = useState("bi-eye");
  const [mystyle, setstyle] = useState("#b4e0ff")
  const [navt, setnavt] = useState("nav-link_light");
  const [show, setshow] = useState("none")
  const [cred, setCred] = useState({ username: "", password: "" })
  const ref = useRef(null)
  let location = useLocation();
  useEffect(() => {

  }, [location])
  // const [text, settext] = useState()
  // let Pass = document.getElementById("Pass");
  // let tog = isNaN(Pass.value);
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
    if (mystyle == "#b4e0ff") {
      setstyle("#3700B3")
      setnavt("nav-link_dark");
    }
    else {
      setstyle("#b4e0ff");
      setnavt("nav-link_light")
    }
  }

  const handleOnChange = (e) => {
    if (e.target.name === "password") {
      if (e.target.value == "") {
        setshow("none");
      }
      else {
        setshow("block")
      }
    }
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  useEffect(()=>{
    if(localStorage.getItem("token")){
      props.loggedin("block")
    }
    else{
      props.loggedin("none")
    }
  },[])

  let history = useNavigate()
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: cred.username, password: cred.password})
    })
    const json = await response.json()
    // console.log(json)
    if(json.success){
      ref.current.click()
      // history("/Schedule")
      props.showAlert("Logged In Successfully", "success")
      props.loggedin("block")
      localStorage.setItem("token", json.authToken)
      setCred({ username: "", password: "" })
    }
    else{
      props.showAlert("Enter Valid Credentials", "danger")
      ref.current.click()
    }
  }

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    props.loggedin("none")
    history("/")
  }
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg shadow rounded mb-2" style={{backgroundColor: "#b4e0ff"}}> */}
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
                <Link className={`nav-link ${navt} ${location.pathname === "/" ? "active" : ""}`} aria-current="page" style={{ color: (navt === "nav-link_dark") && (location.pathname === '/' ? "yellow" : "rgb(193, 193, 0)") }} to="/" id="navhome">Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className={`nav-link ${navt} ${location.pathname === "/events" ? "active" : ""}`} aria-current="page" style={{ color: (navt === "nav-link_dark") && (location.pathname === '/events' ? "yellow" : "rgb(193, 193, 0)") }} to="/events" id="navevents">Events</Link>
              </li>
              <li className={`nav-item mx-5 d-${props.login}`}>
                <Link className={`nav-link ${navt} ${location.pathname === "/Schedule" ? "active" : ""}`} aria-current="page" style={{ color: (navt === "nav-link_dark") && (location.pathname === '/Schedule' ? "yellow" : "rgb(193, 193, 0)") }} to="/Schedule" id="navsch">Schedule Event</Link>
              </li>
              <li className={`nav-item mx-5 d-${props.login}`}>
                <Link className={`nav-link ${navt} ${location.pathname === "/Reports" ? "active" : ""}`} aria-current="page" style={{ color: (navt === "nav-link_dark") && (location.pathname === '/Reports' ? "yellow" : "rgb(193, 193, 0)") }} to="/Reports" id="navreports">Reports</Link>
              </li>
              <li className={`nav-item mx-5 d-${props.login}`}>
                <Link className={`nav-link ${navt} ${location.pathname === "/Requests" ? "active" : ""}`} aria-current="page" style={{ color: (navt === "nav-link_dark") && (location.pathname === '/Requests' ? "yellow" : "rgb(193, 193, 0)") }} to="/Requests" id="navreq">Requests</Link>
              </li>
            </ul>
            <Link onClick={theme} style={{ cursor: "pointer" }}><i className={`${mystyle == "#b4e0ff" ? "bi bi-moon-fill" : "bi bi-sun-fill"} me-3 fs-5 text-black`} style={mystyle == "#b4e0ff" ? null : { filter: "invert(1)" }}></i></Link>
            {localStorage.getItem("token")?<button className={`btn btn-outline-${mystyle == "#b4e0ff" ? "danger" : "light"} px-4`} onClick={handleLogout}>Logout</button>:<button className={`btn btn-outline-${mystyle == "#b4e0ff" ? "success" : "light"} px-5`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Login
            </button>}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={ref}></button>
                  </div>
                  <form onSubmit={handleOnSubmit}>
                    <div className="modal-body">
                      <h4>Username</h4>
                      <input type="text" className="form-control col-8" placeholder="username" aria-label="username"
                        name="username" value={cred.username} aria-describedby="basic-addon1" id="UserName" onChange={handleOnChange} />
                      <h4 className="mt-3">Password</h4>
                      <input type={pass} className="form-control col-8" placeholder="password" aria-label="password"
                        name="password" value={cred.password} aria-describedby="basic-addon1" id="Pass" onChange={handleOnChange} />
                      <Link style={{ display: show, marginTop: "-30px", marginLeft: "auto", marginRight: "1rem" }} type="button"><i className={bi} onClick={ptoggle}></i></Link>
                      <button type="submit" className="btn btn-primary mt-5">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string.isRequired }

Navbar.defaultProps = {
  title: "TextUtils",
  about: "About"
}