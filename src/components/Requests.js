import React from 'react'

export default function Requests() {
    let cards = document.getElementsByClassName("cards");
    const reqsts = (e)=>{
      for(let card of cards){
        if(card.id == e && card.classList.contains("act")){
          break;
        }
        if(card.id == e && !(card.classList.contains("act"))){
          card.classList.add("act");
        }
        else{
          card.classList.remove("act");
        }
      }
    }
    return (
        <>
            <div className="container h-100">
                <div className="ms-5 mt-3" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                    <label className="btn btn-outline-primary me-3 my-1" htmlFor="btnradio1" onClick={reqsts('Pending')}>Pending</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-success me-3" htmlFor="btnradio2" onClick={reqsts('Accepted')}>Accepted</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor="btnradio3" onClick={reqsts('Declined')}>Declined</label>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto act" id="Pending" style={{ height: "40rem" }}>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 1</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E1">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 1
                                                </h1>
                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 2</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E2">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 2
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 3</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E3">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 3
                                                </h1>
                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 4</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E4">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 4
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 5</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E5">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 5
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 6</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E6">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 6
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 7</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E7">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 7
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 8</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E8">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E8" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 8
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-lg btn-success me-sm-5 me-1 my-1">Accept</a>
                                <a href="#" className="btn btn-lg btn-danger">Reject</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto" id="Accepted" style={{ height: "40rem" }}>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 9</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E9">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 9
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 10</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E10">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E10" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 10
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto" id="Declined" style={{ height: "40rem" }}>
                    <div className="row justify-content-evenly">
                        <div className="col-6 card text-center mx-1 mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 11</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E11">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E11" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 11
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 card text-center mb-3" style={{ width: "35rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Event 12</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Officia, vitae ad quibusdam, dolor dicta voluptatum vel impedit
                                    delectus ullam assumenda, consequatur cupiditate iusto
                                    voluptatem atque dolorem earum quaerat illum aliquam veritatis
                                    ea quas odit soluta officiis repellendus? Earum dolorum suscipit
                                    molestiae. Itaque ex vel temporibus!
                                    <button className="btn btn-link" type="button" data-bs-toggle="modal" data-bs-target="#E12">
                                        Show More
                                    </button>
                                </p>
                                <div className="modal fade" id="E12" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                    Event 12
                                                </h1>

                                            </div>
                                            <div className="modal-body">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Nostrum quia vitae asperiores, enim est amet, animi
                                                reprehenderit nisi minus voluptate maiores porro, quas
                                                doloremque! Quis maiores laboriosam sequi officia odio
                                                sunt, ut, dolore corrupti dolorum a quo adipisci facere
                                                animi reiciendis unde exercitationem hic, deleniti aut
                                                fugiat illo? Esse, quasi iusto! Aliquam illo neque quae
                                                accusantium inventore dolorem, provident, magni earum sit
                                                unde harum iure sequi, corrupti laboriosam nesciunt velit
                                                labore? Maiores voluptatum dolorem numquam? Minus
                                                perspiciatis, dolor qui ullam quos omnis eveniet.
                                                Deserunt, id. Tempore ratione esse explicabo eos molestias
                                                ducimus provident nulla, qui, maxime distinctio ea sint
                                                enim!
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
