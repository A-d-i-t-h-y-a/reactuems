import React, {useState} from 'react'
import PropTypes from 'prop-types'
import '../index.css';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';

export default function Navbar(props) {
  const [pass, setpass] = useState("password");
  const [bi, setbi] = useState("bi-eye");
  const [mystyle, setstyle] = useState("#b4e0ff")
  const [co, setco] = useState(null)
  const [navt, setnavt] = useState("nav-link_light");
  const [show, setshow] = useState("none")
  // const [text, settext] = useState()
  // let Pass = document.getElementById("Pass");
  // let tog = isNaN(Pass.value);
  const ptoggle = () => {
    // let x = document.getElementById("Pass");
    // let icon = document.getElementsByClassName("bi")[0];
    if (pass === "password") {
      setpass("text");
      setbi("bi-eye-slash")
    }
    else {
      setpass("password");
      setbi("bi-eye")
    }
    // if (bi==="bi-eye") {
    //   // icon.classList.remove(bi);
    //   setbi("bi-eye-slash");
    //   // icon.classList.add(bi);
    // } else {
    //   // icon.classList.remove(bi);
    //   setbi("bi-eye")
    //   // icon.classList.add(bi);
    // }
  };

  const theme = ()=>{
    if(mystyle == "#b4e0ff"){
      setstyle("#3700B3")
      setco({color: 'yellow'})
      setnavt("nav-link_dark");
    }
    else{
      setstyle("#b4e0ff");
      setco()
      setnavt("nav-link_light")
    }
  }

  const handleOnChange = (e)=>{
    if(e.target.value == ""){
      setshow("none");
    }
    else{
      setshow("block")
    }
  }
  return (
//     <div>
//       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">{props.title}</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className={`nav-link active text-${props.text}`} aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link text-${props.text}`} to="/about">{props.about}</Link>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="light" className="cursor-pointer dark:text-white" viewBox="0 0 16 16" onClick={props.toggleMode}>
//   <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
//   <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
// </svg>
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-primary" type="button">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//     </div>
    <>
      {/* <nav className="navbar navbar-expand-lg shadow rounded mb-2" style={{backgroundColor: "#b4e0ff"}}> */}
      <nav className="navbar navbar-expand-lg shadow mb-2" style={{backgroundColor: mystyle}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="./kmit-bar.png" alt='Unable To Load' style={{width: "3.5rem"}}/></Link>
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
            <a onClick={theme} style={{cursor: "pointer"}}><i className={`${mystyle=="#b4e0ff"?"bi bi-moon-fill":"bi bi-sun-fill"} me-3 fs-5`} style={mystyle=="#b4e0ff"?null:{filter: "invert(1)"}}></i></a>
            <button className={`btn btn-outline-${mystyle=="#b4e0ff"?"success":"light"} px-5`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                        name="User Name" aria-describedby="basic-addon1" id="UserName"/>
                        <h4 className="mt-3">Password</h4>
                          <input type={pass} className="form-control col-8" placeholder="Password" aria-label="Password"
                            name="Password" aria-describedby="basic-addon1" id="Pass" onChange={handleOnChange}/>
                            <Link style={{display: show, marginTop: "-30px", marginLeft: "auto", marginRight: "1rem"}} type="button"><i className={bi} onClick={ptoggle}></i></Link>
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

Navbar.propTypes = {title: PropTypes.string.isRequired, about: PropTypes.string.isRequired}

Navbar.defaultProps = {
  title: "TextUtils",
about: "About"
}