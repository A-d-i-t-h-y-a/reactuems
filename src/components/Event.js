import React from 'react'

export default function Event(props) {
    let event = props.event.replace(" ", "_")
    return (
        <>
            <div className="card text-center mx-1 mb-3 d-inline-block" style={{ width: "35rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.event}</h5>
                    <p className="card-text">
                        {(props.description.length>350)?`${props.description.slice(0, 350)}...`:`${props.description}`}
                        {(props.description.length>350)?<button className="btn btn-link p-0" type="button" data-bs-toggle="modal" data-bs-target={`#${event}`}>
                            Show More
                        </button>:""}
                    </p>
                    <div className="modal fade" id={event} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        {props.event}
                                    </h1>
                                </div>
                                <div className="modal-body">
                                    {props.description}
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
        </>
    )
}
