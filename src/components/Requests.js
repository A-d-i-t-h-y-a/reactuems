import React, { useContext, useEffect } from 'react'
import Event from './Event';
import eventsContext from '../context/events';

export default function Requests() {
    const context = useContext(eventsContext);
    const {getEvents, events, updateStatus} = context;
    let cards = document.getElementsByClassName("cards");
    let pend = events.filter((e)=>{return e.status==="pending"})
    let accept = events.filter((e)=>{return e.status==="accepted"})
    let decline = events.filter((e)=>{return e.status==="declined"})
    const reqsts = (e) => {
        for (let card of cards) {
            if (card.id === e && card.classList.contains("act")) {
                break;
            }
            if (card.id === e && !(card.classList.contains("act"))) {
                card.classList.add("act");
            }
            else {
                card.classList.remove("act");
            }
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            getEvents();
        }
        // eslint-disable-next-line
    },[])

    const handleAccept = (id)=>{
        updateStatus(id, "accepted");
    }

    const handleDecline = (id)=>{
        updateStatus(id, "declined");
    }


    return (
        <>
            <div className="container">
                <div className="ms-5 mt-3" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
                    <label className="btn btn-outline-primary me-3 my-1" htmlFor="btnradio1" onClick={() => reqsts('Pending')}>Pending <span className='badge rounded-pill text-bg-secondary'>{pend.length}</span> </label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                    <label className="btn btn-outline-success me-3" htmlFor="btnradio2" onClick={() => reqsts('Accepted')}>Accepted <span className='badge rounded-pill text-bg-secondary'>{accept.length}</span></label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor="btnradio3" onClick={() => reqsts('Declined')}>Declined <span className='badge rounded-pill text-bg-secondary'>{decline.length}</span></label>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto act" id="Pending" style={{ maxHeight: "40rem" }}>
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            (pend.length>0)?pend.map((event)=>{
                                return <Event key = {event._id} id={event._id} event = {event.name} description = {event.description} status = "pending" handleAccept = {handleAccept} handleDecline = {handleDecline} />
                            }):<h5 className='m-auto'>No Events to Show</h5>
                        }
                    </div>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto" id="Accepted" style={{ maxHeight: "40rem" }}>
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            (accept.length>0)?accept.map((event)=>{
                                return <Event key = {event._id} event = {event.name} description = {event.description}/>
                            }):<h5 className='m-auto'>No Events to Show</h5>
                        }
                    </div>
                </div>
                <div className="cards p-5 mt-3 w-100 shadow bg-body rounded overflow-auto" id="Declined" style={{ maxHeight: "40rem" }}>
                    <div className="d-flex flex-wrap justify-content-between">
                        {
                            (decline.length>0)?decline.map((event)=>{
                                return <Event key = {event._id} event = {event.name} description = {event.description}/>
                            }):<h5 className='m-auto'>No Events to Show</h5>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
