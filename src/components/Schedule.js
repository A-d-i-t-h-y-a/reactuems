import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Schedule(props) {
  let formStep = document.getElementsByClassName("step");
  let btn_link = document.getElementsByClassName("btn-link");
  let history = useNavigate();
  let date = new Date();
  date.setDate(date.getDate() + 1)
  date = `${date.getFullYear()}-${(date.getMonth()>10?'':'0')}${date.getMonth() + 1}-${(date.getDate()>10?'':'0')}${date.getDate()}`
  let [eventdet, setEventdet] = useState({
    name: "",
    description: "",
    etype: "Offline",
    edate: date,
    etime: "",
    venue: "Auditorium",
    food: "no input",
    quantity: "0",
    mdescription: "",
    status: "pending"
  })

  const nextstep = () => {
    let a = 0;
    for (a = 0; a < 3; a++) {
      if (formStep[a].classList.contains("act")) {
        break;
      }
    }
    formStep[a].classList.remove("act");
    btn_link[a].classList.remove("navact");
    a++;
    formStep[a].classList.add("act");
    btn_link[a].classList.add("navact");
  };

  const prevstep = () => {
    let a = 0;
    for (a = 0; a < 3; a++) {
      if (formStep[a].classList.contains("act")) {
        break;
      }
    }
    formStep[a].classList.remove("act");
    btn_link[a].classList.remove("navact");
    a--;
    formStep[a].classList.add("act");
    btn_link[a].classList.add("navact");
  };

  const leftnav = (e) => {
    for (let i of formStep) {
      if (i.id === e && i.classList.contains("act")) {
        break;
      }
      if (i.id === e && !i.classList.contains("act")) {
        i.classList.add("act");
      } else {
        i.classList.remove("act");
      }
    }
    let element = document.getElementsByClassName(e)[0];
    for (let i of btn_link) {
      if (i === element && element.classList.contains("navact")) {
        break;
      }
      if (i === element && !element.classList.contains("navact")) {
        element.classList.add("navact");
      } else {
        i.classList.remove("navact");
      }
    }
  };

  const checkfunc = () => {
    let check = document.getElementsByClassName("form-check-input");
    for (let i of check) {
      i.setAttribute("checked", "");
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://uemsapi.onrender.com/api/event/newevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify(eventdet)
    })
    history("/Schedule")
    props.showAlert("Request sent", "success")
  }
  const handleOnChange = (e) => {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

    checkboxes.forEach((item) => {
      arr.push(item.id)
    })

    setEventdet({ ...eventdet, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div
        id="main"
        className="container-fluid-lg d-flex flex-column flex-sm-row"
        style={{ minHeight: "100%" }}
      >
        <div className="my-sm-5 ms-lg-5 shadow bg-body rounded py-3 lnav" style={{ minHeight: "90%" }}>
          <div className="d-flex flex-row flex-sm-column justify-content-evenly mx-lg-5 h-100">
            <button
              className="btn btn-link text-decoration-none text-black navact book"
              onClick={() => leftnav("book")}
            >
              Book
            </button>
            <button
              className="btn btn-link text-decoration-none text-black refreshment"
              onClick={() => leftnav("refreshment")}
            >
              Refreshments
            </button>
            <button
              className="btn btn-link text-decoration-none text-black request"
              onClick={() => leftnav("request")}
            >
              Request
            </button>
          </div>
        </div>
        <form className="Book container w-sm-75 ms-sm-5 me-sm-5 my-5 shadow bg-body rounded d-flex" style={{ minHeight: "90%" }} onSubmit={handleOnSubmit}>
          <div id="book" className="step act" style={{ overflow: "auto" }}>
            <ul>
              <li>
                <div className="row input-group mb-5">
                  <span className="me-5 col-lg-2">Event Name</span>
                  <input
                    type="text"
                    className="form-control col-lg-8"
                    placeholder="Event Name"
                    aria-label="Event name"
                    name="name"
                    aria-describedby="basic-addon1"
                    value={eventdet.name}
                    onChange={handleOnChange}
                  />
                </div>
              </li>
              <li>
                <div className="row input-group mb-5">
                  <span className="me-5 col-lg-2">Description</span>
                  <textarea
                    className="form-control col-8"
                    aria-label="With textarea"
                    value={eventdet.description}
                    onChange={handleOnChange}
                    name="description"
                  ></textarea>
                </div>
              </li>
              <li>
                <div className="row input-group mb-5">
                  <label className="me-5 col-lg-2">Event Type</label>
                  <select className="form-select col-8" id="Type" name="etype" value={eventdet.etype} onChange={handleOnChange}>
                    <option defaultValue>Offline</option>
                    <option>Online</option>
                  </select>
                </div>
              </li>
              <li className="mb-5">
                <div className="row input-group mb-5">
                  <span className="me-5 col-lg-2">Date</span>
                  <input type="date" className="form-control" name="edate" value={eventdet.edate} onChange={handleOnChange} min={date} />
                  <span className="me-5 col-lg-2">Time</span>
                  <input type="time" className="form-control" name="etime" value={eventdet.etime} onChange={handleOnChange} />
                </div>
              </li>
              <li>
                <div className="row input-group mb-5">
                  <label className="me-5 col-lg-2">Venue</label>
                  <select className="form-select col-8" id="Venue" name="venue" value={eventdet.venue} onChange={handleOnChange}>
                    <option defaultValue>Auditorium</option>
                    <option>Mini Auditorium</option>
                  </select>
                </div>
              </li>
              <li className="buttons">
                <button
                  className="btn btn-primary btn-next"
                  type="button"
                  onClick={nextstep}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
          <div id="refreshment" className="step" style={{ overflow: "auto" }}>
            <ul>
              <li>
                <div className="row my-3">
                  <h3 className="col-lg-4">
                    Menu (
                    <button
                      className="btn btn-link text-decoration-none col-6 fs-6 text-primary"
                      onClick={checkfunc}
                      type="button"
                    >
                      Select All
                    </button>
                    )
                  </h3>
                </div>
              </li>
              <li>
                <div className="ms-1 p-5 shadow bg-body rounded w-sm-75 mh-50 container">
                  <div className="row my-lg-4 justify-content-evenly">
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="Samosa"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="Samosa">
                        Samosa
                      </label>
                    </div>
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="Frooti"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="Frooti">
                        Frooti
                      </label>
                    </div>
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="FiveStar"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="FiveStar">
                        Five Star
                      </label>
                    </div>
                  </div>
                  <div className="row my-lg-4 justify-content-evenly">
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="Chips"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="Chips">
                        Chips
                      </label>
                    </div>
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="CurryPuff"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="CurryPuff">
                        Curry Puff
                      </label>
                    </div>
                    <div className="col-lg-3 form-check">
                      <input
                        className="form-check-input food"
                        type="checkbox"
                        value=""
                        id="Sprite"
                        style={{ width: "16px" }}
                      />
                      <label className="form-check-label" htmlFor="Sprite">
                        Sprite
                      </label>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="row input-group my-5">
                  <span className="col-lg-2">Quantity</span>
                  <input
                    type="number"
                    className="col-lg-8 form-control"
                    placeholder="Quantity"
                    aria-label="Quantity"
                    aria-describedby="basic-addon1"
                    min="0"
                    value={eventdet.quantity}
                    name="quantity"
                    onChange={handleOnChange}
                  />
                </div>
              </li>
              <li className="mb-5">
                <div className="row input-group ">
                  <span className="col-lg-2">Description</span>
                  <textarea
                    className="form-control col-8"
                    aria-label="With textarea"
                    value={eventdet.mdescription}
                    name="mdescription"
                    onChange={handleOnChange}
                  ></textarea>
                </div>
              </li>
              <li style={{ textAlign: "center" }}>
                <div
                  className="my-3 buttons"
                >
                  <button
                    className="btn btn-primary btn-prev"
                    type="button"
                    onClick={prevstep}
                  >
                    Previous
                  </button>
                  <button
                    className="btn btn-primary btn-next"
                    type="button"
                    onClick={nextstep}
                  >
                    Next
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div id="request" className="step overflow-auto">
            <div className="container my-5 mx-auto w-100">
              <h2 className="mb-3">Preview</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Label</th>
                    <th scope="col">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Event Name</td>
                    <td>{eventdet.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Event Description</td>
                    <td>
                    {eventdet.description}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Event Type</td>
                    <td>{eventdet.etype}</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Date&Time</td>
                    <td>{eventdet.edate+" "+eventdet.etime}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-3 buttons">
              <button
                className="btn btn-primary btn-prev"
                type="button"
                onClick={prevstep}
              >
                Previous
              </button>
              <button className="btn btn-primary btn-next" type="submit">
                Request
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
